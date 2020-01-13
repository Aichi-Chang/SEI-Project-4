import React, { useState } from 'react'


const Header = () => {

  // const [data, setData] = useState()

  // function handleLogout(e) {
  //   e.preventDefault()
  //   Auth.logOut()
  //   setData({ ...data })
  //   this.props.history.push('/')
  // }


  return (
    <div className='w-100 fixed flex items-center justify-center bg-white'>
      <h1 className='tracked'>WORKBENCH</h1>
      <a href='#' className='fixed right-2 .no-underline near-black'>Logout</a>
      <a href='#' className='fixed left-2 .no-underline near-black'>Calander</a>
    </div>

  )
}

export default Header