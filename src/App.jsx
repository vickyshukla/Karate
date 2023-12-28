import React from 'react';
import './App.css';
import Home from './componets/Home';
import Navbar from './include/Navbar';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/home"  element={<Home/>} />
          {/* <Route path="/about" component={<About/>} />
          <Route path="/contact" component={<Contact/>} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;