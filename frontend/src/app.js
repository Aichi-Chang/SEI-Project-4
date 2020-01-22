import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'


import './css/main.css'
import 'tachyons'

import MyApp from './components/Calender'
import AddTodo from './components/AddTodo'
import TodayTag from './components/TodayTag'
import SingleProject from './components/SingleProject'
import AddNewProject from './components/AddNewProject'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'




const App = () => {


  return <div>

    <div className='w-100 fixed tc bg-white'>
      <h1 className='tracked'>WORKBENCH</h1>
    </div>

    <HashRouter>

      <Switch>
        <Route exact path = '/calender' component={MyApp} />
        <Route exact path = '/inbox' component={Home} />
        <Route exact path = '/add-todo' component={AddTodo} />       
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/add-new-project' component={AddNewProject} />
        <Route exact path = '/single-project/:id' component={SingleProject} />
        <Route exact path = '/today' component={TodayTag} />
        <Route exact path = '/' component={Register} />
      </Switch>

    </HashRouter>
  </div>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)