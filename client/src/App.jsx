import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import View from './components/View';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Create' element={<Create />}></Route>
          <Route path='/View' element={<View />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
