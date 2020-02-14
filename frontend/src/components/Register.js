import React, { useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'


const Register = (props) => {
  

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [errors, setErrors] = useState({
    errors: ''
  })


  function handleChange(e) { 
    e.persist()
    console.log(data)
    // [e.target.name] is a [key], so doesn't matter what we type inside
    // it will be generate to a key in our object
    // see here: https://stackoverflow.com/questions/50376353/wy-we-need-to-put-e-target-name-in-square-brackets
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(errors => ({ ...errors, [e.target.name]: '' }))
  }

  function handleSubmit(e) {
    // e.persist()
    e.preventDefault()
    axios.post('/api/register/', data)
      .then(() => {
        // console.log(res.data)
        // if (errors.errors === '')
        props.history.push('/login')
      }) 
      .catch(err =>setErrors(err.response.data))
  }
  

  console.log(errors)

  return <div className="flex flex-column items-center justify-center vh-100">
    <form onSubmit={(e) => handleSubmit(e)} className='register-form'>
      <div className="pa2 mt4">
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          required={true}
          name="email"
          className="input pa2"
          placeholder="Email"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message.email}
      </small>}

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="username"
          className="input pa2"
          placeholder="User Name"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message.username}
      </small>}

      <div className="pa2">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          required={true}
          name="password"
          className="input pa2"
          placeholder="Password"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message.password}
      </small>}

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          required={true}
          name="password_confirmation"
          className="input pa2 w-100"
          placeholder="Confirm Password"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message.password_confirmation}
      </small>}

      <div className="pa2 tc">
        <button className="pointer mt4 pa2 nearblack grow br4 ph5 f6">
          Join
        </button>
      </div>
      
      <div className="moon-gray f6 tc">
        <p>Already a member? <Link to={'/login'} className='moon-gray dim:hover underline .tracked'>Login</Link></p>
      </div>
    </form>
  </div>

}



export default Register