import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './component/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import {Home, About,Program, Contact} from './pages';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Program/>
    <Contact/>
    </>
  );
}

export default App;
