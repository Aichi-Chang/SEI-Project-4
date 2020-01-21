import React from 'react'


class AddTodoIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#B0B0B0"/>
        <line x1="20.5" y1="6" x2="20.5" y2="35" stroke="white"/>
        <line x1="35" y1="20.5" x2="6" y2="20.5" stroke="white"/>
      </svg>

    )
  }
}
 
export default AddTodoIcon