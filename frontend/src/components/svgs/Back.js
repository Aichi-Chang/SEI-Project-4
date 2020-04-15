import React from 'react'


class Back extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width="30" height="28" viewBox="0 0 10 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* <path d="M9 17L1 9L9 1" stroke="#323232"/>
        <path d="M1 9L19 9" stroke="#323232"/> */}
        <path d="M10 6L18 14L10 22" stroke="#323232"/>
        <path d="M18 14L0 14" stroke="#323232"/>
      </svg>
    )
  }
}
 
export default Back