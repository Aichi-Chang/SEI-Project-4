import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'


import './css/main.css'
import 'tachyons'

import CalendarPage from './components/CalendarPage'
import AddTodo from './components/AddTodo'
import DelayedTag from './components/DelayedTag'
import ImportantTag from './components/ImportantTag'
import TodayTag from './components/TodayTag'
import SingleProject from './components/SingleProject'
import AddNewProject from './components/AddNewProject'
import Login from './components/Login'
import Register from './components/Register'
import Home2 from './components/Home2'
import Header from './components/Header'
import Auth from './lib/Auth'



const App = () => {


  return <div>

    <div className='w-100 fixed tc bg-white'>
      <h1 className='tracked header'>WORKBENCH</h1>
    </div>

    <HashRouter>
      {/* {Auth.isAuthenticated && <Header />} */}

      <Switch>
        <Route exact path = '/calendar' component={CalendarPage} />
        <Route exact path = '/inbox' component={Home2} />
        <Route exact path = '/add-todo' component={AddTodo} />       
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/add-new-project' component={AddNewProject} />
        <Route exact path = '/single-project/:id' component={SingleProject} />
        <Route exact path = '/today' component={TodayTag} />
        <Route exact path = '/important' component={ImportantTag} />
        <Route exact path = '/delayed' component={DelayedTag} />
        <Route exact path = '/' component={Register} />
      </Switch>

    </HashRouter>
  </div>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)