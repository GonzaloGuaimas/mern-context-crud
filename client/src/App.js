import React from 'react'
import {HomePage, PostForm, NotFoundPage} from './pages/index'
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/new' element={<PostForm/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  )
}
