import './App.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './component/Navbar';
import {Home, About,Program, Contact} from './pages';



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
