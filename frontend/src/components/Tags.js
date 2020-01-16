import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
  // console.log(tags)


  return (
    <div className='tags w-100 fixed mb3 flex items-start justify-center bg-white'>
      <div className='mr4 grow'>
        <a href='/inbox' className='folder1 no-underline .tracked'>{tags[2].name}</a>
      </div>
      <div className='mr4 grow'>
        <a href='/today' className='folder2 no-underline .tracked'>{tags[0].name}</a>
      </div>
      <div className='mr4 grow'>
        <a href='#' className='folder3 no-underline .tracked'>{tags[1].name}</a>
      </div>
      <div className='grow'>
        <a href='#' className='folder4 no-underline .tracked'>{tags[3].name}</a>        
      </div>
      

    </div>
  )


}


export default Tags