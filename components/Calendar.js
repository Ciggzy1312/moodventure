import React, { useState, useEffect } from 'react'
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import moment from 'moment';
import Link from 'next/link';
import Graph from './Graph';

const Calendar = ({ items }) => {

  const [month, setMonth] = useState(moment().format("MMMM"));
  const [maxAndMinDates, setMaxAndMinDates] = useState({
    max: moment().endOf("month").dayOfYear(),
    min: moment().startOf("month").dayOfYear(),
  });
  const [offset, setOffset] = useState(0);
  const [monthlyCalendar, setMonthlyCalendar] = useState([]);
  const [weekdays] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ]);
  const [year, setYear] = useState(moment().year());
  const [dayData, setDayData] = useState();

  const getCalendar = (monthOffset) => {
    const month = moment().add(monthOffset, "months");
    const min = month.startOf("month").dayOfYear();
    const max = month.endOf("month").dayOfYear();
    setMonth(month.format("MMMM"));
    setMaxAndMinDates({
      min,
      max,
    });
    const year = month.year();
    setYear(year);
    const newCalendar = [];

    const daysOfYear =
      moment().year() % 400 ? (moment().year() % 100 ? 365 : 366) : 365;
    for (let i = 1; i <= daysOfYear; i++) {
      newCalendar.push({
        notes: "",
        color: "rgb(249, 250, 251)",
      });
    }

    items.map((item) => {
      if (moment(item.date).year() === year) {
        newCalendar[moment(item.date).dayOfYear() - 1] = {
          notes: item.note,
          color: getColor(item.mood)
        }
      }
    })

    const tempCalendar = newCalendar.length === 0 ? calendar.slice(min - 1, max) : newCalendar.slice(min - 1, max);
    setMonthlyCalendar(tempCalendar);
    console.log(newCalendar, offset)
  };

  const getModalData = (dayNumber) => {
    setDayData(monthlyCalendar[dayNumber].notes);
  }

  useEffect(() => {
    getCalendar(offset)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const getColor = (moodNumber) => {
    const colors = ["rgb(237, 69, 72)", "rgb(250, 157, 157)", "rgb(252, 183, 109)", "rgb(135, 250, 158)", "rgb(66, 212, 122)"]

    return colors[moodNumber];
  };

  const getDayOffset = (offset) => {
    switch (offset) {
      case 1:
        return "col-start-1 col-end-2";
      case 2:
        return "col-start-1 col-end-3";
      case 3:
        return "col-start-1 col-end-4";
      case 4:
        return "col-start-1 col-end-5";
      case 5:
        return "col-start-1 col-end-6";
      case 6:
        return "col-start-1 col-end-7";
      case 7:
      default:
        return "hidden";
    }
  };

  return (
    <div>

      <div className='flex justify-between py-8 px-12'>
        <div className='self-center  w-1/3'>
          <ul className='flex text-slate-700 justify-between font-semibold text-lg'>
            <Link href="/"><li className='hover:text-[#2FCC9D]'>Home</li></Link>
            <li className='text-[#2FCC9D]'>Memories</li>
            <Link href="/articles"><li className='hover:text-[#2FCC9D]'>Articles</li></Link>
          </ul>
        </div>

        <div className=''>
          <a href="/api/auth/logout" className='text-[#2FCC9D] hover:text-white'><button className=' border-[#2FCC9D] border-2 rounded font-semibold px-4 py-1.5 hover:bg-[#2FCC9D]'>Logout</button></a>
        </div>
      </div>

      <div className='calendar my-8'>
        <div className='flex justify-center items-center mb-4 border-b pb-3'>
          <div className="font-bold shadow hover:shadow-md cursor-pointer transform duration-150 h-8 w-8 flex items-center justify-center rounded-full" onClick={() => setOffset((prev) => prev - 1)}>
            <CaretLeftOutlined />
          </div>
          <div className="font-bold text-4xl text-[#2FCC9D] mx-4">
            {month}
          </div>
          <div className="font-bold shadow hover:shadow-md cursor-pointer transform duration-150 h-8 w-8 flex items-center justify-center rounded-full" onClick={() => setOffset((prev) => prev + 1)}>
            <CaretRightOutlined />
          </div>
        </div>

        <div className='flex'>
          <div className='date mx-12'>
            <div className="grid grid-cols-7 gap-x-1 gap-y-1 my-4">
              {weekdays.map((weekday, i) => (
                <span key={i} className="text-lg font-semibold flex items-center justify-center">
                  {weekday}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-x-1 gap-y-1">
              <span className={getDayOffset(moment().dayOfYear(maxAndMinDates.min).isoWeekday())}></span>
              {monthlyCalendar.length > 0 ? (
                monthlyCalendar.map((day, i) => (
                  <span style={{ backgroundColor: day.color, aspectRatio: "1/1" }} className="w-12 flex items-center justify-center font-bold rounded-full cursor-pointer" onClick={() => getModalData(i)} key={i}>
                    {i + 1}
                  </span>
                ))
              ) : (
                <Skeleton active />
              )}
            </div>
          </div>

          <div className='data'>
            <div className="mx-12">
              <p className="text-4xl text-gray-400 italic font-medium mt-4">
                {dayData ? dayData : "You have not created a memory for this day"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='graph'>
        <Graph items={items} offset={offset} setOffset={setOffset} />
      </div>
    </div>
  )
}

export default Calendar