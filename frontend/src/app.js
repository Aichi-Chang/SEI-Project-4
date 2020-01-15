import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import './css/main.css'
import 'tachyons'

import TodayTag from './components/TodayTag'
import SingleProject from './components/SingleProject'
import AddNewProject from './components/AddNewProject'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Header from './components/Header'




const App = () => {


  return <BrowserRouter>

    <Header />

    <Switch>
      <Route exact path = '/inbox' component={Home} />
      <Route exact path = '/' component={Register} />
      <Route exact path = '/login' component={Login} />
      <Route exact path = '/add-new-project' component={AddNewProject} />
      <Route exact path = '/single-project/:id' component={SingleProject} />
      <Route exact path = '/today' component={TodayTag} />
    </Switch>

  </BrowserRouter>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)