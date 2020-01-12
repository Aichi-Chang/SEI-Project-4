import React, { useState } from 'react'
import axios from 'axios'



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
    axios.post('/api/register', data)
      .then(res => {
        console.log(res.data)
        if (errors.errors === '')
          props.history.push('/login')
      }) 
      .catch(err =>setErrors({ ...errors, ...err.error }))
  }
  



  return <div className="flex flex-column items-center justify-center vh-100">
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="pa2  mt6">
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          required={true}
          name="email"
          className="input pa2"
          placeholder="Email"
        />
        {/* this is not working... */}
        {/* {errors.email && <small className="red">
          {errors.email}
        </small>} */}
      </div>

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="first_name"
          className="input pa2"
          placeholder="First Name"
        />
      </div>

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          required={true}
          name="last_name"
          className="input pa2"
          placeholder="Last Name"
        />
      </div>

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          required={true}
          name="password"
          className="input pa2"
          placeholder="Password"
        />
      </div>

      <div className="pa2 ">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          required={true}
          name="passwordConfirmation"
          className="input pa2 w-100"
          placeholder="Confirm Password"
        />
      </div>

      <div className="pa2 tc">
        <button className="pointer mt3 pa2 nearblack grow br4 ph5">
          Join
        </button>
      </div>
      
      <div className="f6 tc">
        <p>Already a member? <a href={'/login'} className='gray dim:hover underline'>Login</a></p>
      </div>
    </form>
  </div>

}



export default Register