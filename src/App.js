import Education from "./Components/Education";
import { useState } from "react";

import Hero from "./Components/Hero";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";


function App() {
  const [loading , SetLoading]=useState(true)
  const spinner= document.getElementById('spinner')
  if(spinner){
    setTimeout(()=>{
        spinner.style.display='none';
        SetLoading(false)
    },2000)
  }
  return (
    !loading && (
    <>
    <Hero/>
    <Navbar/> 

    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="education" element={<Education/>}/>
   <Route path="skills" element={<Skills/>}/>
   <Route path="projects" element={<Projects/>}/>
   <Route path="contact" element={<Contact/>}/>


    </Routes>
    {/* <Footer/> */}

    </>
    )
  );
}

export default App;
