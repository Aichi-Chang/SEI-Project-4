import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'
import Back from './svgs/Back'
import Header from './Header'

const SingleProject = (props) => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`/api/projects/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))   
  }, [])

  function handleDelete() {
    axios.delete(`/api/projects/${props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    window.location.reload()
    // .then(res => setData(res.data)) 
  }

  console.log(data)


  if (!data) return null

  return <div>
    <Header />
    <div className='flex justify-center vh-100'>
      <div className='home grow'>
        <p className='add-project-text tc ma0'>yes, I'm sure</p>
        <button className='add-project-icon ph5 pv2' onClick={() => handleDelete()}>
          <Link to='/inbox' className='no-underline dark-red'>
            delete this project
          </Link>
        </button>
      </div>
      <div className='single-project flex flex-column items-center relative'>
        <Link to={'/inbox'} className='z-1 absolute left-1 top-2 grow pointer'>
          <Back />
        </Link>
        <h1 className='title pa3 w-100'>{data.title}</h1>
        <p className='note pa2'>{data.note}</p>
        {(data.tags[0]) ? <p className='mt5 f6 gray'>{`Tag: ${data.tags[0].name}`}</p> : null}
      </div>
    </div>  
  </div>



}


export default SingleProject