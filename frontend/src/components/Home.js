import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { useDrag } from 'react-dnd'

import Auth from '../lib/Auth'
import AddProject from './svgs/AddProject'



const Home = () => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState({
    errors: {}
  })

  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data))
  }, [])

  // function onDragStart(id) {
  //   setData({
  //     activeId: id
  //   })
  // }

  // function dragTo(tags) {
  //   // let { tags,  activeId} = this.state;
  //   setData({ tags: tags[data.activeId] })
  //   if (data.tags.status !== data.status) {
  //     data.task.status = data.status
  //     setData({
  //       tags: tags
  //     })
  //   }
  //   cancelSelect()
  // }

  // function cancelSelect() {
  //   setData({
  //     activeId: null
  //   })
  // }


  if (!data) return null 
  console.log(data) 
  
  return <div className='flex items-center justify-center '>

    {Auth.isAuthenticated() && <div className='main-home flex justify-center fixed'>
      <div className='home grow'>
        <p className='add-project-text tc ma0'>add new project</p>
        <Link to='/add-new-project' className='add-project-icon ph5 pv2'>
          <AddProject />
        </Link>
      </div>
      <div className='flex flex-column-reverse items-center justify-center'>
        {data.map((projects, i) => {
          return <div key={i} className='project pa3 flex items-center justify-center grow'>
            <Link to={`/single-project/${projects.id}`} className='no-underline pointer project-title'>{projects.title}</Link> 
          </div>
        })}
      </div>
    </div>}
  </div>
  
}


export default Home