import React, { useState } from 'react'
import Auth from '../lib/Auth'


const Header = () => {

  const [data, setData] = useState()

  function handleLogout(props) {
    // e.preventDefault()
    Auth.logOut()
    setData({ ...data })
    // props.history.push('/')
  }


  return (
    <div className='w-100 fixed flex items-center justify-center bg-white'>
      <h1 className='tracked'>WORKBENCH</h1>
      <a href='#' className='fixed left-2 .no-underline near-black'>Calander</a>
      {/* {Auth.isAuthenticated() && <div>hi</div>} */}
      {Auth.isAuthenticated() && <a className='z-2 fixed right-2 .no-underline near-black' onClick={(e)=>handleLogout(e)}>
         Logout
      </a>}
    </div>

  )
}

export default Header