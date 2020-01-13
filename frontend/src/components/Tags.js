import React, { useState, useEffect } from 'react'



const Tags = () => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState({
    errors: {}
  })

  return (
    <div className='w-100 fixed bottom-2 mb3 flex items-start justify-center bg-white'>
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