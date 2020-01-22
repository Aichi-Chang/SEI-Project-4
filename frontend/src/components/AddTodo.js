import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../lib/Auth'
import Header from './Header'
import Back from './svgs/Back'
import AddProject from './svgs/AddProject'

const AddTodo = (props) => {
  const [todoData, setTodoData] = useState({
    heading: '',
    content: '',
    project: '',
    completed: false
  })
  const [errors, setErrors] = useState({
    errors: ''
  })

  useEffect(() => {
    setTodoData({ ...todoData, project: props.location.state.id })
  },[])

  function handleChange(e) {
    // e.persist()
    console.log(todoData)
    setTodoData({ ...todoData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/todos/', todoData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        if (errors.errors === '')
          props.history.push(`/single-project/${props.location.state.id}`)
      })
      .catch(err => setErrors({ ...errors, errors: err.response.data }))
  }



  return <div>
    <Header />
    <div className='flex justify-center items-center vh-100'>
      <div className='mt1 flex flex-column justify-center items-center'>
        {Auth.isAuthenticated() && <form 
          onSubmit={(e) => handleSubmit(e)}
          className='flex flex-column items-center mt5 relative'
        >
          <Link to={'/inbox'} className='z-1 absolute left-1 top-1 grow pointer'>
            <Back />
          </Link>
          <input
            onChange={(e) => handleChange(e)}
            type='text'
            className='title pa2'
            name='heading'
            placeholder='... Toto'
            maxLength='35'
          />
          <input 
            onChange={(e) => handleChange(e)}
            type='text'
            name='project'
            value={todoData.project}
            className='projectId'
          />
          <div className='home grow'>
            <p className='add-project-text tc ma0'>add to my project</p>
            <button className='add-project-icon ph5 pv2 pointer'>
              <AddProject />
            </button>
          </div>
        </form>}
      </div>
    </div>
  </div>

}



export default AddTodo