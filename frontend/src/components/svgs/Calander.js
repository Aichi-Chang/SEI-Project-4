import React from 'react'


class Calander extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="4" width="27" height="27" stroke="#323232"/>
        <path d="M1 10.5H27M8.34783 21.8077L11.1739 24.5L19.087 16.9615" stroke="#323232"/>
        <path d="M7 4.66667V0" stroke="#323232"/>
        <path d="M21 4.66667V0" stroke="#323232"/>
      </svg>
    )
  }
}
 
export default Calander