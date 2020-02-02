import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

import { Link } from 'react-router-dom'


const Login = (props) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    errors: ''
  })


  function handleChange(e) {
    e.persist()
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(errors => ({ ...errors, [e.target.name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login/', data)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setUser(res.data.user)
        props.history.push('/inbox')
        window.location.reload()
      })
      .catch(err => setErrors(err.response.data))
  }

  console.log(errors)
  


  return <div className="flex flex-column items-center justify-center vh-100">
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="pa2 mt4">
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          required={true}
          name="email"
          className="pa2 bg-near-white"
          placeholder="Email"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message}
      </small>}

      <div className="pa2">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          required={true}
          name="password"
          className="pa2 bg-near-white"
          placeholder="Password"
        />
      </div>
      {errors.message && <small className='red flex flex-column'>
        {errors.message}
      </small>}

      <div className="pa2 tc">
        <button className="pointer mt4 pa2 nearblack grow br4 ph5 f6">
          Login
        </button>
      </div>
      
      <div className="moon-gray f6 tc">
        <p>Not a member? <Link to={'/'} className='moon-gray dim:hover underline .tracked'>Join</Link></p>
      </div>
    </form>
  </div>


}



export default Login