import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'


import './css/main.css'
import 'tachyons'

import Calendar from './components/Calendar'
import AddTodo from './components/AddTodo'
import ArchiveTag from './components/ArchiveTag'
import ImportantTag from './components/ImportantTag'
import TodayTag from './components/TodayTag'
import SingleProject from './components/SingleProject'
import AddNewProject from './components/AddNewProject'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Header from './components/Header'
import Auth from './lib/Auth'




const App = () => {


  return <div>

    <div className='w-100 fixed tc bg-white'>
      <h1 className='tracked header'>WORKBENCH</h1>
    </div>

    <HashRouter>
      {Auth.isAuthenticated && <Header />}

      <Switch>
        <Route exact path = '/calendar' component={Calendar} />
        <Route exact path = '/inbox' component={Home} />
        <Route exact path = '/add-todo' component={AddTodo} />       
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/add-new-project' component={AddNewProject} />
        <Route exact path = '/single-project/:id' component={SingleProject} />
        <Route exact path = '/today' component={TodayTag} />
        <Route exact path = '/important' component={ImportantTag} />
        <Route exact path = '/archive' component={ArchiveTag} />
        <Route exact path = '/' component={Register} />
      </Switch>

    </HashRouter>
  </div>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)