import React, { Component } from 'react' 
import { DatePicker, RangePicker, theme } from 'react-trip-date' 
import { ThemeProvider } from 'styled-components' 

// const  handleResponsive  =  setNumberOfMonth  =>  {
//   let  width  =  document.querySelector('.tp-calendar').clientWidth 
//   if  (width  >  900)  {
//     setNumberOfMonth(3) 
//   }  else  if  (width  <  900  &&  width  >  580)  {
//     setNumberOfMonth(2) 
//   }  else  if  (width  <  580)  {
//     setNumberOfMonth(1) 
//   }
// } 

// const  Day = ({  day  }) => {
//   return  (
// 		<>
// 			<p  className="date">{day.format('DD')}</p>
// 			<p  className="date">7</p>
// 		</>
//   ) 
// } 
	
class Calendar extends Component {

  onChange = date => console.log(date)

  render() {
    return (
      <ThemeProvider theme={theme}>
        <DatePicker
          // handleChange={onChange}
          // selectedDays={['2019-11-06']} //initial selected days
          jalali={false}
          numberOfMonths={1}
          numberOfSelectableDays={3} // number of days you need 
          // disabledDays={['2019-12-02']} //disabeld days
          // responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
          disabledBeforToday={true} 
          disabled={false} // disable calendar 
          // dayComponent={Day} //custom day component 
          // titleComponent={Title} // custom title of days
        />
      </ThemeProvider>
    ) 
  }
}

export default Calendar