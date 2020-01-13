import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './css/main.css'
import 'tachyons'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Header from './components/Header'



const App = () => {


  return <BrowserRouter>

    <Header />

    <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/register' component={Register} />
      <Route exact path = '/login' component={Login} />
    </Switch>

  </BrowserRouter>
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)