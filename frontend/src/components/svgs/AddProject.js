import React from 'react'


class AddProject extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23" cy="23" r="23" fill="#DDDDDD"/>
        <line x1="23.5" y1="8" x2="23.5" y2="39" stroke="white"/>
        <line x1="39" y1="23.5" x2="8" y2="23.5" stroke="white"/>
      </svg>
    )
  }
}
 
export default AddProject