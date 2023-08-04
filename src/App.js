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

    {
      window.addEventListener('scroll',()=>
      {
        const scrolled = window.scrollY;

        if(window.screen.width>400){
          if(scrolled<=570){setcolor(0)}
          if(scrolled>=570){setcolor(1)}
          if(scrolled>=1570){setcolor(2)}
          if(scrolled>=2670){setcolor(3)}
      }

        else
        {
          if(scrolled<=570){setcolor(0)}
          if(scrolled>=570){setcolor(1)}
          if(scrolled>=2570){setcolor(2)}
          if(scrolled>=3670){setcolor(3)}
        }
      })

      
      
    }
 
    
    <div id='BackDrop'>
   <div id='home' > <Home /></div>
   
    <Nav color={color}/>
  
    <div id='about' style={{border:"2px solid white"}} ><About /></div>
   
    <div id='portfolio' ><Portfolio SetTabs = {SetTabs} Tabs ={Tabs}  card={card} setCard={setCard} color={color}/></div>
    <div id='presentation' ><Presentation /></div>
    <div id='contact' ><Contact /></div>

   {/* <div id={`${(card==0)?`cardexit`:'card' }`}><Card setCard={setCard} card={card} setcolor={setcolor} /></div> */}
   
   </div>
    </>
  )
}
