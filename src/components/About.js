import React, { useEffect } from 'react'
import {MdOutlineSpeed,MdDevices,MdLightbulbOutline,MdDynamicFeed} from 'react-icons/md'
import "../App.css"
export default function About(props) {
useEffect(()=>{
// animation 0
  const observer = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
     
        if(entry.isIntersecting)
        {
          entry.target.classList.add('show')
         
        } })});
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el))



// animation 1
  const observer1 = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
       
        if(entry.isIntersecting)
        {
          entry.target.classList.add('show1')
         
        }})});
  const hiddenElements1 = document.querySelectorAll('.hidden1');
  hiddenElements1.forEach((el) => observer1.observe(el))

  // animation 2

  const observer2 = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
       
        if(entry.isIntersecting)
        {
          entry.target.classList.add('show2')
          
        }})});
  const hiddenElements2 = document.querySelectorAll('.hidden2');
  hiddenElements2.forEach((el) => observer2.observe(el))

  //animation 3
  const observer3 = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
       
        if(entry.isIntersecting)
        {
          entry.target.classList.add('show3')
      
        }})});
  const hiddenElements3 = document.querySelectorAll('.hidden3');
  hiddenElements3.forEach((el) => observer3.observe(el))



  


  const observer4 = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
       
        if(entry.isIntersecting)
        {
          props.setcolor(1);
          
        }})});
  const hiddenElements4 = document.querySelectorAll('.About');
  hiddenElements4.forEach((el) => observer4.observe(el))


},[])
  

var cssVar = 80;
var htmlVar = 70;
var reactVar =80;
var javascriptVar =60;
var javaVar =70;
var SQLVar = 70;
var linuxVar = 60;



  return (
    <>
    
    <div className='About ' >
      <div  id='a1' className='hidden'> 
      <h1>ABOUT</h1>
        <h2 ><hr /> </h2>
       </div>
      
      <div className='icons '>
        <div className='iconItems hidden'><h1><MdOutlineSpeed className='iconvi' color='#42C6C7' size={80} /></h1><h3>Fast</h3>Fast load times and lag free interaction, my highest priority.</div>
        <div className='iconItems hidden'><h1><MdDevices className='iconvi' size={80} color='#42C6C7' /></h1><h3>Responsive</h3>My layouts will work on any device, big or small.</div>
        <div className='iconItems hidden'><h1><MdLightbulbOutline className='iconvi' size={80} color='#42C6C7'/></h1><h3>Intuitive</h3>Strong preference for easy to use, intuitive UX/UI.</div>
        <div className='iconItems hidden'><h1><MdDynamicFeed className='iconvi' size={80} color='#42C6C7'/></h1><h3>Dynamic</h3>Websites don't have to be static, I love making pages come to life.</div>
      </div>

      <div className='picSkill '>


        <div className='pic'>
        <div id='p1' className='hidden1'>
          <img src="1667999351376-01.jpeg (1).png" alt="" height={100} width={100}/>
        </div>
        <div id='p2' className='hidden1' >
          <h4 id='p2Heading'>Who's this guy?</h4>
        Passionate and dedicated Full Stack Developer with a strong academic background and a deep love for coding. Proficient in both front-end and back-end technologies, I am committed to creating user-friendly and efficient web applications.        
        
        <p style={{textAlign:"center"}}><a href="#contact" id='p2Link'>Let's make something special.</a></p>
        
        </div>
    
        </div>



        <div className='skill hidden3'>
        <div className='progress'><p>CSS</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${cssVar}%`}}></div><h6 >{cssVar}%</h6></div></div>
        <div className='progress'><p>HTML</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${htmlVar}%`}}></div><h6 >{htmlVar}%</h6></div></div>
        <div className='progress'><p>React-JS</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${reactVar}%`}}></div><h6 >{reactVar}%</h6></div></div>
        <div className='progress'><p>Javascript</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${javascriptVar}%`}}></div><h6 >{javascriptVar}%</h6></div></div>
        <div className='progress'><p>Java</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${javaVar}%`}}></div><h6 >{javaVar}%</h6></div></div>
        <div className='progress'><p>SQL</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${SQLVar}%`}}></div><h6 >{SQLVar}%</h6></div></div>
        <div className='progress'><p>SpringBoot</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${linuxVar}%`}}></div><h6 >{linuxVar}%</h6></div></div>
        <div className='progress'><p>Linux</p><div style={{width:"85%",backgroundColor:"#EEEEEE",display:"flex"}}><div className='proSlide  hidden2' style={{height:"100%",width:`${linuxVar}%`}}></div><h6 >{linuxVar}%</h6></div></div>
        </div>

      </div>
    </div>
    </>
  )
}
