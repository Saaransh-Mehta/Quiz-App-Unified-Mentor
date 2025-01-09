import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Level from './components/Level'
import QuizPanel from './components/QuizPanel'
import LevelTwo from './components/LevelTwo'
import LevelThree from './components/LevelThree'


const App = () => {
  return (
    <>
   
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/quiz' element={<Level/>} />
    <Route path='/quiz/level1' element={<QuizPanel/>} />
    <Route path='/quiz/level2' element={<LevelTwo/>} />
    <Route path='/quiz/level3' element={<LevelThree/>} />
    
   </Routes>
    </>
  )
}

export default App