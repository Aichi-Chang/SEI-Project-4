import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../lib/Auth'
import Calander from './svgs/Calander'
import LogoutIcon from './svgs/LogoutIcon'



const Header = () => {

  const [tags, setTags] = useState()

  function handleLogout() {
    // e.preventDefault()
    Auth.logOut()
    // the props doesn't have anything
    // props.history.push('/login')
  }
  
  useEffect(() => {
    axios.get('/api/tags/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setTags(res.data))
      
  },[])

  if (!tags) return null
  // console.log(tags)

  // console.log(tags[0].projects.filter(e => e.owner === 1).length)



  return (
    <div className='w-100 fixed flex items-center justify-center bg-white'>
      {Auth.isAuthenticated() && <Link to='/calendar' className='fixed top-1 left-2 .no-underline near-black grow pointer'>
        <Calander />  
      </Link>}
      {Auth.isAuthenticated() && <a href='/' className='fixed top-1 right-2 .no-underline near-black pointer grow' onClick={(e)=>handleLogout(e)}>
        <LogoutIcon />
      </a>}
      <div className='fixed top-2'>
        {Auth.isAuthenticated() && 

        <div className='flex items-center justify-center mt5'>
          <div className='mr4 grow'>
            <Link to='/inbox' className='folder1 no-underline .tracked flex flex-wrap relative'>
              Inbox
              <div className='absolute right-1'>
                {
                  tags[0].projects.filter(ele => ele.owner === Auth.getUser().id).length +
                  tags[1].projects.filter(ele => ele.owner === Auth.getUser().id).length +
                  tags[2].projects.filter(ele => ele.owner === Auth.getUser().id).length
                }
              </div>
            </Link>
          </div>
          <div className='mr4 grow'>
            <Link to='/today' className='folder2 no-underline .tracked flex flex-wrap relative'>
              {tags[0].name}
              <div className='absolute right-1'>
                {tags[0].projects.filter(ele => ele.owner === Auth.getUser().id).length}
              </div>
            </Link>
          </div>
          <div className='mr4 grow'>
            <Link to='/important' className='folder3 no-underline .tracked flex flex-wrap relative'>
              {tags[1].name}
              <div className='absolute right-1'>
                {tags[1].projects.filter(ele => ele.owner === Auth.getUser().id).length}
              </div>
            </Link>
          </div>
          <div className='grow'>
            <Link to='/delayed' className='folder4 no-underline .tracked flex flex-wrap relative'>
              {tags[2].name}
              <div className='absolute right-1'>
                {tags[2].projects.filter(ele => ele.owner === Auth.getUser().id).length}
              </div>
            </Link>        
          </div>
          
        </div>}
      </div>
    </div>

  )

}

export default Header