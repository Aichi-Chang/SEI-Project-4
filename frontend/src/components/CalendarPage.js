import React, { useState, useEffect } from 'react' 
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'

export default function CalendarPage() {

  const [date, setDate] = useState(new Date())

  function handleChange(e) {
    setDate(e)
  }

  console.log(date)

  return (
    <div className=''>
      <Calendar 
        className=''
        onChang={(e) => handleChange(e)}
        value={date}
      />
    </div>
  )
}
