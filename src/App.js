import React, { useState } from 'react'
import Home from './components/Home'
import "./App.css"

import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'

import Presentation from './components/Presentation'
import Contact from './components/Contact'
export default function App() {


  const [color,setcolor] = useState(0);
  const [card,setCard] = useState(0);
  const [Tabs,SetTabs] = useState('1')
  
  return (
    <>
    <div id='BackDrop'>
   <div id='home' > <Home setcolor={setcolor}/></div>
   
    <Nav color={color}/>
  
    <div id='about' style={{border:"2px solid white"}} ><About setcolor={setcolor}/></div>
   
    <div id='portfolio' ><Portfolio SetTabs = {SetTabs} Tabs ={Tabs} setcolor={setcolor} card={card} setCard={setCard} color={color}/></div>
    <div id='presentation' ><Presentation setcolor={setcolor}/></div>
    <div id='contact' ><Contact setcolor={setcolor}/></div>

   {/* <div id={`${(card==0)?`cardexit`:'card' }`}><Card setCard={setCard} card={card} setcolor={setcolor} /></div> */}
   
   </div>
    </>
  )
}
