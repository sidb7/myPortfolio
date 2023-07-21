import React, { useEffect } from 'react'
import "../App.css"
export default function Home(props) {

useEffect(()=>{

  const observer = new IntersectionObserver((enteries) =>
  { 
    enteries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting)
        {
          
          props.setcolor(0);
        }
        
       
    })
  }
  );


  const hiddenElements = document.querySelectorAll('.Home');
  hiddenElements.forEach((el) => observer.observe(el));


},[])
  




  return (
    
    <>
    
    <div className="area" style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
   

    <div className='Home'>
   
<div ><p style={{display: "flex"}}>Hello, I'm <p id='name'>&nbsp;Siddhant Bhandary</p>.</p>
<p>I'm a full-stack developer.</p>
<a href="#about" style={{textDecoration:"none"}}><button  id='ViewButton'> View my work<h3 id='arrow'>&#8250;</h3></button></a>
</div> 

</div>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
            </ul>
    </div >
  
    
 
    </>
  ) 
}
