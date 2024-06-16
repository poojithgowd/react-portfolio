import React from 'react';
import Nav from './Components.js/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Skills from './Components.js/Skills';
import Home from './Components.js/Home';
import styles from './Components.js/styles.css'
import Contact from './Components.js/Contact';
import Projects from './Components.js/Projects';
import Achievements from './Components.js/Achievements';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <div className='bg'>
      
      <Nav/>   
       <Home/> 
      {/* <Skills/> */}
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  );
}

export default App;
