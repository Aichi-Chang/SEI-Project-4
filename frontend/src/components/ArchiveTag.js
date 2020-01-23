import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'




const ArchiveTag = () => {
  const [data, setData] = useState([])
  const [newdata, setNewData] = useState([])

  useEffect(() => {
    axios.get('/api/projects/', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        const data2 = res.data
        setData(res.data)
        const newData = data2.filter((ele)=> {
          if (!ele.tags[0] || ele.tags[0].name !== 'Archive') return null
          else return ele.tags[0].name === 'Archive'
        })
        setNewData(newData)
      })
  }, [])


  return <div>
    <div className='flex items-center justify-center'>
      {Auth.isAuthenticated() && <div className='main-home flex justify-center fixed'>
        <div className='flex flex-column-reverse items-center justify-center'>
          {newdata.map((projects, i) => {
            return <div key={i} className='project pa3 flex items-center justify-center grow'>
              <Link to={`/single-project/${projects.id}`} className='no-underline pointer project-title'>{projects.title}</Link> 
            </div>
          })}
        </div>
      </div>}
    </div>
  </div>
}

export default ArchiveTag