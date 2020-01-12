import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Auth from '../../lib/auth'



const Login = (props) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    errors: {}
  })


  function handleChange(e) {
    e.persist()
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: '' }))
  }

  // function handleSubmit(e) {
  //   // e.persist()
  //   e.preventDefault()
  //   axios.post('/api/login', data)
  //     .then(res => {
  //       Auth.setToken(res.data.token)
  //       Auth.setUser(res.data.user)
  //       // console.log(res.data.user)
  //       // console.log(Auth.getUser())
  //       props.history.push('/')
  //     })
  //     .catch(err => setErrors({ ...errors, errors: err.data }))
  // }

  


  return <div className="flex flex-column items-center justify-center vh-100">
    {/* <form onSubmit={(e) => handleSubmit(e)}> */}
    <form>
      <div className="pa2">
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          required={true}
          name="email"
          className="pa2 bg-near-white"
          placeholder="Email"
        />
        {/* {this.state.errors.email && <small className="help is-danger">
        {this.state.errors.email}
      </small>} */}
      </div>

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

      <div className="pa2 tc">
        <button className="pointer mt3 pa2 nearblack grow br4 ph5">
          Login
        </button>
      </div>
      
      <div className="f6 tc">
        <p>Not a member? <a href={'/register'} className='gray dim:hover underline'>Join</a></p>
      </div>
    </form>
  </div>


}



export default Login