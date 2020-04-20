import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import update from 'immutability-helper'

import Card from './Card'
import Auth from '../lib/Auth'
import AddProject from './svgs/AddProject'



const Home = () => {
  const [data, setData] = useState()


  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data))
  }, [])

  

  if (!data) return null 
  // console.log(data)

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = data[dragIndex]
    setData(
      update(data, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      })
    )
  }
  
  
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
          return <Card 
            key={projects.id} 
            index={i} 
            className='project pa3 flex items-center justify-center grow' 
            moveCard={moveCard} 
            title={projects.title}
            url={`/single-project/${projects.id}`}
          />
        })}
      </div>
    </div>}
  </div>
  
}

export default Home