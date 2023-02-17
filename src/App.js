import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/services' element={<Services/>} />
       <Route path='/About' element={<About/>}  />
       <Route path='/sign-up' element={<SignUp/>}/>
       <Route path='/Blog' element={<Blog/>}/>
       <Route path='/About' element={<About/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
