import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'



const Tags = () => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState({
    errors: {}
  })


  useEffect(() => {
    axios.get('/api/tags/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data))
  },[])


  if (!data) return null
  console.log(data)

  return (
    <div className='tags w-100 fixed mb3 flex items-start justify-center bg-white'>
      <div className='mr4 grow'>
        <a href='#' className='folder1 no-underline .tracked'>Inbox</a>
      </div>
      <div className='mr4 grow'>
        <a href='#' className='folder2 no-underline .tracked'>Today</a>
      </div>
      <div className='mr4 grow'>
        <a href='#' className='folder3 no-underline .tracked'>Whatever</a>
      </div>
      <div className='grow'>
        <a href='#' className='folder4 no-underline .tracked'>Done</a>        
      </div>
      

    </div>
  )


}


export default Tags