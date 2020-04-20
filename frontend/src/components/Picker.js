import React, { useState, useEffect } from 'react'
import { DatePicker } from '@material-ui/pickers'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import axios from 'axios'
import Auth from '../lib/Auth'




export default function Picker({ updateDate }) {


  const [selectedDates, setSelectedDates] = useState()
  const [selectedDays, setSelectedDays] = useState([])
  const [errors, setErrors] = useState()

  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setSelectedDays(res.data))
      .catch(err => setErrors({ ...errors, errors: err.response.data }))
  }, [])


  function handleChange(e) {
    // console.log(e.getUTCHours() + 1)
    // console.log(e.getUTCMinutes())
    setSelectedDates(e)
    updateDate(e)
  }



  // function handleMonthChange() {

  // }



  const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: '#267DFF'
        }
      },
      MuiPickersCalendarHeader: {
        iconButton: {
          backgroundColor: '#EDEDED'
        }
      },
      MuiPickersBasePicker: {
        pickerViewLandscape: {
          backgroundColor: '#EDEDED'
        }
      },
      MuiPickersDay: {
        daySelected: {
          backgroundColor: '#267DFF'
        }
      }

    }
  })

  const selected = {
    backgroundColor: 'red',
    borderRadius: '50%',
    width: '36px',
    height: '36px'
  }



  return (

    <div className='absolute calendar'>

      <ThemeProvider theme={materialTheme}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={selectedDates} 
          onChange={(e) => handleChange(e)}
          renderDay={(date, selectedDate, isIncurrentMonth, dayComponent) => {
            const days = selectedDays.map(info => {
              return info.created_at
            })
            const isSelected = isIncurrentMonth && days.includes(date.toLocaleDateString())
            return <div style={isSelected ? selected : undefined}>{dayComponent}</div>
          }}
        />
      </ThemeProvider>
    </div>
  )
}