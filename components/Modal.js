import React, { useEffect, useState } from 'react'
import moment from "moment";
import { DatePicker, Input } from "antd";
import axios from 'axios';

const { TextArea } = Input;

const Modal = ({modalVisibility, setModalVisibility, email}) => {

    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [notes, setNotes] = useState("")
    const [mood, setMood] = useState(2)
    const [edit, setEdit] = useState(false)

    const moodIcons = [
        {
            icon: "🙁",
            text: "Rough Day",
        },
        {
            icon: "😐",
            text: "Bad Day",
        },
        {
            icon: "🙂",
            text: "Okayish Day",
        },
        {
            icon: "😀",
            text: "Good Day",
        },
        {
            icon: "😄",
            text: "Great! Day",
        },
    ];

    const createMood = async (e)=>{
        await axios.post("/api/mood/addMood", {email, date, mood, notes})
    }

    const getMood = async ()=>{
        const res = await axios.post("/api/mood/getMood", {email, date});
        const val = res.data.item;
  
        if(val){
          setMood(val.mood)
          setNotes(val.note)
          setEdit(true)
        } else{
          setMood(2)
          setNotes("")
          setEdit(false)
        }
    }

    const handleEdit = ()=>{
        createMood()
        setModalVisibility(!modalVisibility)
    }

    useEffect(()=>{
        getMood();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[date])

    return (
        <div className='my-4'>
            <div className="my-10">
                <p className="font-bold my-2 text-lg">Select Date</p>
                <DatePicker
                    defaultValue={moment()}
                    format="DD/MM/YYYY"
                    onChange={(val) => {
                        setDate(val ? val.format("YYYY-MM-DD") : val)}}
                />
            </div>

            <div className="grid grid-cols-5">
                {moodIcons.map((icon, i) => (
                    <div
                        className="flex flex-col items-center justify-between cursor-pointer"
                        onClick={(e) => setMood(i)}
                        key={i}
                    >
                        <span
                            className={`${mood === i ? "text-2xl" : "text-base"}`}
                        >
                            {icon.icon}
                        </span>
                        <span className={`${mood === i && "font-bold"}`}>
                            {icon.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="my-6 w-2/3 mx-auto">
                <TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder={`Tell us about your day`} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>


            <button className="my-12 bg-[#2FCC9D] px-4 py-2 text-white rounded font-semibold" onClick={handleEdit}>{edit ? 'Edit' : 'Add to calendar'}</button>
        </div>
    )
}

export default Modal