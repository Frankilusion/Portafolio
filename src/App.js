import "./App.css";
import ComponentesInicio from './ComponentesInicio';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import RickandMorty from "./RickandMorty/RickandMorty";
import Clima from './Clima/Clima';
import Steps from './Steps/Steps';
import Todolist from "./todo-list/Todolist";
import BuscadorContacto from './Buscador-contacto/BuscadorContacto';
import Calculadora from "./Calculadora/Calculadora";
import React from 'react';
import { AOS } from "aos";
import {useState,useEffect} from "react";
import  'aos/dist/aos.css'; 
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
}from 'react-router-dom';

function App() {
 
  return (
 
 <div >
 
  <div className="pororo">
  <Router>  
  <ScrollContainer>
  <Routes>
    <Route path='/buscador-contacto' element={<BuscadorContacto/>}/>
    <Route path='/clima' element={<Clima/>}/>
    <Route path='/step' element={<Steps/>}/>
    <Route path='/todolist' element={<Todolist/>}/>
    <Route path='/calculadora' element={<Calculadora/>}/>
    <Route path='/rickandmorty' element={<RickandMorty/>}/>
  </Routes>
  </ScrollContainer>
 </Router>
  </div>
 


 
  <div className="App">
  <Router>  
  <ScrollContainer>
  <Routes>
    <Route  index element={ <ComponentesInicio/>}/>
  </Routes>
  </ScrollContainer>
 </Router>
 </div>
 </div>


  );
}

export default App;
