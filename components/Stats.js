import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import { Skeleton } from "antd";
import axios from 'axios';

const Stats = ({email}) => {

    const [isReady, setIsReady] = useState(false)
    const [items, setItems] = useState([])

    const getMoods = async () => {
        const res = await axios.post("/api/mood/getMoods", {email});
        const val = res.data.items;
        setItems(val);
        setIsReady(true)
      }
      
      useEffect(()=>{
        getMoods()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
        {isReady ? <Calendar items={items}/> : <Skeleton />}
    </div>
  )
}

export default Stats