import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Auth from '../lib/Auth'
import Header from './Header'
// import Tags from './Tags'
// import Calander from './svgs/Calander'
// import LogoutIcon from './svgs/LogoutIcon'



const Today = () => {
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
          if (!ele.tags[0] || ele.tags[0].name !== 'Today') return null
          else return ele.tags[0].name === 'Today'
        })
        setNewData(newData)
      })
  }, [])



  // if (!newdata) return null

  // const filterByTag = () => {
  //   const newData = data.filter(function(item) {
  //     if (!item.tags[0] || item.tags[0].name !== 'Today') return null
  //     else return item.tags[0].name === 'Today'
  //   })
  //   return newData
  // }

  // console.log(filterByTag())
  // console.log(newdata)


  return <div>
    <Header />
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

export default Today