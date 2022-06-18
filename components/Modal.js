import React, { useState } from 'react'
import moment from "moment";
import { DatePicker, Input } from "antd";

const { TextArea } = Input;

const Modal = ({modalVisibility, setModalVisibility}) => {

    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [notes, setNotes] = useState("")
    const [mood, setMood] = useState(2)
    const [edit, setEdit] = useState(false)

    const moodIcons = [
        {
            icon: "🙁",
            text: "Rough day",
        },
        {
            icon: "😐",
            text: "Not good",
        },
        {
            icon: "🙂",
            text: "Not bad",
        },
        {
            icon: "😃",
            text: "Good",
        },
        {
            icon: "😄",
            text: "Great!",
        },
    ];

    const handleEdit = ()=>{
        setModalVisibility(!modalVisibility)
    }

    return (
        <div className='my-4'>
            <div className="my-10">
                <p className="font-bold my-2 text-lg">Select Date</p>
                <DatePicker
                    defaultValue={moment()}
                    format="DD/MM/YYYY"
                    onChange={(val) => setDate(val ? val.toISOString().split('T')[0] : val)}
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