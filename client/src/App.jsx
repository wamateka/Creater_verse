import { useState } from 'react'
import {useRoutes, Route, Routes} from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'


function App() {

  return (
    <>
      <Routes>
        <Route path = '/home' element = {<ShowCreators/>}/>
        <Route path = '/creator/:id' element = {<ViewCreator/>}/>
        <Route path = '/edit/:id' element = {<EditCreator/>}/>
        <Route path = '/add' element = {<AddCreator/>}/>
      </Routes>
    </>
  )
}

export default App
