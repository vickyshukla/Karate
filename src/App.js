import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './component/Navbar';
import {
  Home,
  About,
  Program,
  Contact,
  TestimonialPage,
  Footer,
  Instructors,
  Schedule,
  Faq,
} from './pages';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Program/>
    <Instructors/>
    <Schedule/>
    <TestimonialPage/>
    <Faq/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
 
