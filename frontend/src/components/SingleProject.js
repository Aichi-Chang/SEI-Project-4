import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'
import Back from './svgs/Back'



const SingleProject = (props) => {

  const [data, setData] = useState({ todos: [] })

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


  if (!data) return null
  console.log(data)

  // function handleCheckbox(e) {
  //   axios.delete(`/api/projects/${props.match.params.id}/todos/${e.target.id}/`, {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })

  // }

  function todoDelete(e) {
    axios.delete(`/api/projects/${props.match.params.id}/todos/${e.target.id}/`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    window.location.reload()
  }


  return <div>
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
        <Link 
          to={{ 
            pathname: '/add-todo', 
            state: { id: parseInt(props.match.params.id) } 
          }} 
          className='no-underline z-2 absolute right-2 grow pointer add-todo-icon flex items-center justify-center'
        >
          <p className='z-2 dark-gray dim:hover absolute pt1 pb1 pl2 pr2 ba br-pill f6'>
            +todo
          </p>
        </Link>
        <h1 className='title pa3 w-100'>{data.title}</h1>
        <p className='note'>{data.note}</p>
        <div className='absolute bottom-0'>
          {data.todos ? 
            data.todos.map((todo, i) =>  
              <div key={i} className='todos mt1 relative flex flex-wrap items-center b--moon-gray bg-near-white'>
                {/* <input 
                  onClick={(e) => handleCheckbox(e)}
                  type='checkbox'
                  defaultChecked={false}
                  className='w-10'
                /> */}
                <p className='f6 gray w-90 mt1 mb1'>{todo.heading}</p>
                <div 
                  id={todo.id}
                  className='f6 gray w-90 mt1 mb1 absolute pointer grow deleteTodo'
                  onClick={(e) => todoDelete(e)}  
                >✕</div>
              </div> 
            )
            : null} 
        </div>
      </div>
    </div>  
  </div>



}


export default SingleProject