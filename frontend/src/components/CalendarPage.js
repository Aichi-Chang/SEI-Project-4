import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import axios from 'axios'

import Picker from './Picker'
import Auth from '../lib/Auth'
import BackRight from './svgs/BackRight'


export default function CalendarPage() {

  const [date, setDate] = useState()
  


  // function handleChange(e) {
  //   setDate(e)
  // }


  return (
    <div className='relative vh-100'>
      {Auth.isAuthenticated() && <Link to='/inbox' className='fixed top-1 right-2 .no-underline near-black pointer grow'>
        <BackRight />
      </Link>}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Picker 
          updateDate={setDate}
        />
      </MuiPickersUtilsProvider> 
    </div>
  )
}
