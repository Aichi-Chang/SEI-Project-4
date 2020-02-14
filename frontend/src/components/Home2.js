import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

export default function Home2() {
  return (
    <div>
      <DndProvider backend={Backend}>
        <Home />
      </DndProvider>
    </div>
  )
}
