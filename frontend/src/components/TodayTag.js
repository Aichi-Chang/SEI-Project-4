import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'
// import Tags from './Tags'
// import Calander from './svgs/Calander'
// import LogoutIcon from './svgs/LogoutIcon'



const Today = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data))
  }, [])


  if (!data) return null
  // console.log(data)

  

  return <div className='flex items-center justify-center '>

    {Auth.isAuthenticated() && <div className='main-home flex justify-center fixed'>
      {/* <div className='home grow'>
        <p className='add-project-text tc ma0'>add new project</p>
        <Link to='/add-new-project' className='add-project-icon ph5 pv2'>
          <AddProject />
        </Link>
      </div> */}
      <div className='flex flex-column-reverse items-center justify-center'>
        {data
          .map((projects, i) => {
            return <div key={i} className='project pa3 flex items-center justify-center grow'>
              <Link to={`/single-project/${projects.id}`} className='no-underline pointer project-title'>{projects.title}</Link> 
            </div>
          })
        }
      </div>
    </div>}
  </div>
}

export default Today