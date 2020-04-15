import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Header from './Header'
import Auth from '../lib/Auth'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

export default function Home2() {
  return (
    <div>
      {Auth.isAuthenticated && <Header />}
      <DndProvider backend={Backend}>
        <Home />
      </DndProvider>
    </div>
  )
}
