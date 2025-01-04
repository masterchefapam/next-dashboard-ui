"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Deliver from Parcel",
        time: "12:00 PM - 2:00PM",
        description: "Lorem ipsum dolor sit amet, consectur adipiscing elit."
    },
    {
        id: 2,
        title: "The Long Gun with Atols",
        time: "12:00 PM - 2:00PM",
        description: "Lorem ipsum dolor sit amet, consectur adipiscing elit."
    },
    {
        id: 3,
        title: "The Last wars of pongs",
        time: "12:00 PM - 2:00PM",
        description: "Lorem ipsum dolor sit amet, consectur adipiscing elit."
    },
    {
        id: 4,
        title: "He guns tolls the wind",
        time: "12:00 PM - 2:00PM",
        description: "Lorem ipsum dolor sit amet, consectur adipiscing elit."
    },
]


const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <Calendar onChange={onChange} value={value} />

        <div className='my-10 w-full'>
          <span className='text-xl font-semibold'>
            Events
          </span>
                {events.map((ev =>(
                      <div className='flex flex-col gap-1 border-t-2 py-2
                       odd:border-violet-400 
                        even:border-gray-500' key={ev.id}>
                          <div className='flex justify-between '>
                            <div className='text-sm font-bold'>{ev.title}</div>   
                            <div className='text-xs text-gray-400'>{ev.time}</div>  
                          </div>
                          <div className='text-xs'>
                            {ev.description}
                          </div>
                            
                    </div>
                )))}
           
        </div>

    </div>
  )
}

export default EventCalendar