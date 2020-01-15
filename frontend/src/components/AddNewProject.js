import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../lib/Auth'

import Back from './svgs/Back'
import AddProject from './svgs/AddProject'


const AddNewProject = (props) => {
  const [data, setData] = useState({
    title: '',
    note: ''
  })
  const [errors, setErrors] = useState({
    errors: ''
  })

  function handleChange(e) {
    e.persist()
    console.log(data)
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/projects/', data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        console.log(res.data)
        if (errors.errors === '')
          props.history.push('/home/')
      })
      .catch(err => setErrors({ ...errors, errors: err.response.data }))
  }

  return <div>
    <div className='flex justify-center items-center vh-100'>
      <div className='mt3 flex flex-column justify-center items-center'>
        {Auth.isAuthenticated() && <form 
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-column items-center mt5 relative'
        >
          <Link to={'/home'} className='z-1 absolute left-1 top-1 grow pointer'>
            <Back />
          </Link>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            className='title pa2 w-100'
            name='title'
            placeholder='... Task Name'
            maxLength='35'
          />
          <textarea 
            onChange={(e) => handleChange(e)}
            className='note pa2'
            placeholder="Your note here"
            rows='15'
            cols='50'
            name='note'
          />
          <div className='home grow'>
            <p className='add-project-text tc ma0'>add to my list</p>
            <button className='add-project-icon ph5 pv2 pointer'>
              <AddProject />
            </button>
          </div>
        </form>}
      </div>
    </div>
  </div>


}


export default AddNewProject