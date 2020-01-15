import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Back from './svgs/Back'


const SingleProject = (props) => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`/api/projects/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
      // .then(res => setEvent({ event: res }))      
  }, [])

  console.log(data)

  if (!data) return null

  return <div>
    <div className='flex justify-center vh-100'>
      <div className='single-project flex flex-column items-center relative'>
        <Link to={'/home'} className='z-1 absolute left-1 top-2 grow pointer'>
          <Back />
        </Link>
        <h1 className='title pa3 w-100'>{data.title}</h1>
        <p className='note pa2'>{data.note}</p>
      </div>
    </div>  
  </div>



}


export default SingleProject