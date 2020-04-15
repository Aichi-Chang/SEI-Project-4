import React, { useState, useEffect } from 'react'
import { DatePicker } from '@material-ui/pickers'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'




export default function Picker({ updateDate }) {


  const [selectedDate, setSelectedDate] = useState(null)
  


  function handleChange(e) {
    // console.log(e.getUTCHours() + 1)
    // console.log(e.getUTCMinutes())
    setSelectedDate(e)
    updateDate(e)
  }

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



  return (

    <div className='absolute calendar'>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={selectedDate} 
          onChange={(e) => handleChange(e)}
        />
      </ThemeProvider>
    </div>
  )
}