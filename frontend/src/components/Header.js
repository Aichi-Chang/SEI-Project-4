import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../lib/Auth'
import Tags from './Tags'
import Calander from './svgs/Calander'
import LogoutIcon from './svgs/LogoutIcon'
// import { render } from 'react-dom'



const Header = ({ data }) => {

  function handleLogout() {
    // e.preventDefault()
    Auth.logOut()
    // the props doesn't have anything
    // props.history.push('/login')
  }

  const [tags, setTags] = useState()
  const [today, setToday] = useState()
  
  useEffect(() => {
    axios.get('/api/tags/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setTags(res.data))
      // .then(() => setToday(filterByTag))
  },[])

  if (!tags) return null
  console.log(data)

  const filterByTag = () => {
    const newData = data.filter(function(item) {
      if (!item.tags[0] || item.tags[0].name !== 'Today') return null
      else return item.tags[0].name === 'Today'
    })
    return newData
  }

  console.log(filterByTag())


  return (
    <div className='w-100 fixed flex items-center justify-center bg-white'>
      {Auth.isAuthenticated() && <a href='#' className='fixed top-2 left-2 .no-underline near-black grow pointer'>
        <Calander />  
      </a>}
      {Auth.isAuthenticated() && <a href='/' className='fixed top-2 right-2 .no-underline near-black pointer grow' onClick={(e)=>handleLogout(e)}>
        <LogoutIcon />
      </a>}
      <div className='fixed top-2'>
        {Auth.isAuthenticated() && 

        <div className='flex items-center justify-center mt5'>
          <div className='mr4 grow'>
            <Link to='/inbox' className='folder1 no-underline .tracked'>Inbox</Link>
          </div>
          <div className='mr4 grow'>
            <Link to='/today' className='folder2 no-underline .tracked' onClick={() => setToday(filterByTag())} today={today}>{tags[0].name}</Link>
          </div>
          <div className='mr4 grow'>
            <Link to='#' className='folder3 no-underline .tracked'>{tags[1].name}</Link>
          </div>
          <div className='grow'>
            <Link to='#' className='folder4 no-underline .tracked'>{tags[2].name}</Link>        
          </div>
          
        </div>}
      </div>
    </div>

  )

}

export default Header