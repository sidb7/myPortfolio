import React from 'react'

export default function Nav({color}) {
  return (
    <>
    <div className='Nav'>
       
            <div ><a style={{color:(color==0)?"#C7006B":"",fontWeight:(color==0)?"600":""}} href="#home"> HOME </a></div>
            <div ><a style={{color:(color==1)?"#C7006B":"",fontWeight:(color==1)?"600":""}} href="#about"> ABOUT </a></div>
            <div ><a style={{color:(color==2)?"#C7006B":"",fontWeight:(color==2)?"600":""}} href="#portfolio"> PORTFOLIO </a></div>
            <div ><a style={{color:(color==3)?"#C7006B":"",fontWeight:(color==3)?"600":""}} href="#contact"> CONTACT </a></div>
        
    </div>
    
 
    </>
  )
}
