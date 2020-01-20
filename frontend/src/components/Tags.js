import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../lib/Auth'



const Tags = () => {
  const [tags, setTags] = useState()
  
  useEffect(() => {
    axios.get('/api/tags/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setTags(res.data)) 
  },[])

  if (!tags) return null


  return ( <div className='fixed top-2'>
    {Auth.isAuthenticated() && 

    <div className='flex items-center justify-center mt5'>
      <div className='mr4 grow'>
        <Link to='/inbox' className='folder1 no-underline .tracked'>Inbox</Link>
      </div>
      <div className='mr4 grow'>
        <Link to='/today' className='folder2 no-underline .tracked' onClick={filterByTag}>{tags[0].name}</Link>
      </div>
      <div className='mr4 grow'>
        <Link to='#' className='folder3 no-underline .tracked'>{tags[1].name}</Link>
      </div>
      <div className='grow'>
        <Link to='#' className='folder4 no-underline .tracked'>{tags[2].name}</Link>        
      </div>
      
    </div>}
  </div>
  )


}


export default Tags