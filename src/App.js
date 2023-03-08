// here we will use the components
import './App.css';
import Navbar from './components/Navs/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/header/Header';
import Statics from './components/statics/static';
import Show from './components/show/Show';
import Mande from './components/mand/Mand';
import Watch from './components/watch/Watch';
import BtnUp from './components/btnUp/BtnUp';
import Foods from './components/foods/Foods';
import Testimonial from "./components/testimonials/Testimonial"
import Question from './components/questions/Question';
import Wast from './components/wast/Wast';
import Subscrib from './components/subscrib/Subscrib';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/home' element={App}/>
        </Routes>
     <Header/>
     <Statics/>
     <Show/>
     <Mande/>
     <Watch/>
     <Foods/>
     <Testimonial/>
     <Question/>
     <Wast/>
     <Subscrib/>
     <Footer/>

    </BrowserRouter>
   
  );
}

export default App;
