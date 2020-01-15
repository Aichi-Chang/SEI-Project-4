import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'



const Tags = () => {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data))
  }, [])


  const initial = {
    tags: ''
  }


  if (!data) return null

  console.log(data.map(
    item => {
      item.tags[0] 
      if (!item.tags[0]) return null
      else return item.tags[0].name
    }  
  ))


  function filterByTag () {
    // data.filter(function() {
    // console.log(data)
  }

  return (
    <div className='tags w-100 fixed mb3 flex items-start justify-center bg-white'>
      <div className='mr4 grow'>
        <a href='/inbox' className='folder1 no-underline .tracked'>Inbox</a>
      </div>
      <div className='mr4 grow'>
        <a 
          href='/today' 
          className='folder2 no-underline .tracked'
          onClick={filterByTag}
        >
          Today
        </a>
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