import React, { useEffect } from 'react'
import '../Contact.css'
import {RiLinkedinFill} from 'react-icons/ri';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import {AiFillGitlab} from 'react-icons/ai';
export default function Contact() {

  useEffect(()=>{

    const observer = new IntersectionObserver((enteries) =>
    { 
      enteries.forEach((entry) =>{
          
          if(entry.isIntersecting)
          {
            
            entry.target.classList.add("textBoxShow")}
       
      })
    }
    );
  
  
    const hiddenElements = document.querySelectorAll('.textBoxHide');
    hiddenElements.forEach((el) => observer.observe(el));
  

    const observer1 = new IntersectionObserver((enteries) =>
    {
      enteries.forEach((entry)=>
      {
        if(entry.isIntersecting)
        {
          entry.target.classList.add("HeadingShow")
        }
      })
    })

    const hiddenElement1 = document.querySelectorAll(".Heading")

    hiddenElement1.forEach((el)=>observer1.observe(el))

  },[])


  return (
   <>
   <div className="Contact">
    <div className='Heading textBoxHide'>CONTACT <hr /></div>
    

    <div className='Text'>
      
      <div className='TextBox1 textBoxHide'>
      <div className='Qtext'>Have a question or want to work together?</div>
                <div className="mb-3 w-100">
            
                          <input type="text " className="form-control border-0 text-light  bg-dark" id="formGroupExampleInput" placeholder="Name"/>
                 </div>
                
                <div className="mb-3 w-100">
                      
                            <input type="email" className="form-control border-0 text-light bg-dark" id="formGroupExampleInput2" placeholder="Email"/>
                 </div>

                 <div className="mb-3 w-100">
            
            <input type="text" className="form-control bg-dark Message border-0 text-light" id="formGroupExampleInput" placeholder="Enter your message"/>
                </div>
          <div id='SubmitButtonBox'> <button id='SubmitButton'>SUBMIT</button></div>
          </div>
    </div>
    <div className='BottomBox'>
    <div className='UPButton' ><a href="#" className='UPButton1'>&#10506;</a></div>  

    <div className="IconContact"><RiLinkedinFill className='iconR'/></div>
    <div className="IconContact"><BsInstagram className='iconR'/></div>
    <div className="IconContact"><FaFacebookF className='iconR'/></div>
    <div className="IconContact"><AiFillGitlab className='iconR'/></div>
    </div>

   </div>
   
   </>
  )
}
