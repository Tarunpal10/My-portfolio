import React from "react";
import "../Style/Skill.css";
import { FaReact, FaHtml5, FaCss3, FaPython, FaStarHalfAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { DiDjango, DiFirebase } from "react-icons/di";
import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
import htmll from '../Assets/htmll.webp'
import css from '../Assets/cssnew.png'
import js from '../Assets/jsnew.webp'
import react from '../Assets/reactnew.jpeg'
import pyhton from '../Assets/pyhton.webp'
import expres from '../Assets/express.jpg'
import node from '../Assets/nodenew.jpeg'
import mysql from '../Assets/sql.jpg'
import mongodb from '../Assets/mongo.jpg'
import django from '../Assets/django.jpg'
import boot from '../Assets/boot.webp'
import fire from '../Assets/firebase.png'
import c from '../Assets/c.png'
import java from '../Assets/java.webp'
import Footer from '../Components/Footer'





const Skills = () => {
  return (
    <div className="main-skill">
    <h1 className="h1">Front-End Technologies</h1>
<div className="container">

<div class="card" style={{width:300}}>
  <img src={htmll} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Html | Html5</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={css} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">CSS | CSS3</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={js} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">JavaScript |Es6</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={react} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">React Js</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={boot} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">BootStrap</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
  </div>
</div>

</div>

<h1 className="h1">Back-End Technologies</h1>
<div className="container">
<div class="card" style={{width:300}}>
  <img src={expres} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Express Js</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar />  </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={node} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Node Js</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={django} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Django</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> </p>
  </div>
</div>
</div>

<h1 className="h1">Databases</h1>
<div className="container">
<div class="card" style={{width:300}}>
  <img src={mongodb} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">MongoDB</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={mysql} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">MySql</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={fire} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">FireBase</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar />  </p>
  </div>
</div>
</div>

<h1 className="h1">Programing Languages</h1>
<div className="container">

<div class="card" style={{width:300}}>
  <img src={c} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">C</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
  </div>
</div>


<div class="card" style={{width:300}}>
  <img src={pyhton} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Python</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar/> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={js} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Javascript</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar/> </p>
  </div>
</div>

<div class="card" style={{width:300}}>
  <img src={java} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Java</h3>
    <p class="card-text">Staring: <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
  </div>
</div>

</div>
<p className="pe"> Core knowledge of concept like - </p>

<div className="newskill">
<br />
<h5>DBMS</h5>
<h5>DSA</h5>
<h5>OS</h5>
<h5>Git & Github</h5>
<h5>Vs Code</h5>
<h5>Ms Office</h5>
<h5>Netlify</h5>
<br />

</div>
<p className="pe"> Soft Skills -</p>

<div className="newskill">
<br />
<h5> Teamwork</h5>
<h5>Communication</h5>
<h5> Flexibility</h5>
<h5>Problem-solving</h5>
<h5>Positive attitude</h5>
<h5>Punctual</h5>
</div>
<Footer/>
</div>

  )
};

export default Skills;
