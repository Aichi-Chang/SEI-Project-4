import React, { useState, useEffect } from 'react'

import Auth from '../lib/Auth'
import Tags from './Tags'
import Calander from './svgs/Calander'
import LogoutIcon from './svgs/LogoutIcon'



const Header = (props) => {
  const [data, setData] = useState({

  })


  function handleLogout() {
    // e.preventDefault()
    Auth.logOut()
    // the props doesn't have anything
    // props.history.push('/login')
  }


  return (
    <div className='w-100 fixed flex items-center justify-center bg-white'>
      <h1 className='tracked'>WORKBENCH</h1>
      {Auth.isAuthenticated() && <a href='#' className='fixed left-2 .no-underline near-black grow pointer'>
        <Calander />  
      </a>}
      {Auth.isAuthenticated() && <a href='/' className='z-2 fixed right-2 .no-underline near-black pointer grow' onClick={(e)=>handleLogout(e)}>
        <LogoutIcon />
      </a>}
      {Auth.isAuthenticated() && <Tags />}
    </div>

  )
}

export default Header