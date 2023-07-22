import React, { useEffect } from 'react'
import "../Contact.css"
import "../App.css"
export default function Contact() {
 


  useEffect(()=>{

    const observer = new IntersectionObserver((enteries) =>
    { 
      enteries.forEach((entry) =>{
          
          if(entry.isIntersecting)
          {
            if(entry.isIntersecting)
            {
            entry.target.classList.add('show')}
            }
         })});

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  
    
    const observer1 = new IntersectionObserver((enteries) =>
    { 
      enteries.forEach((entry) =>{
          
          if(entry.isIntersecting)
          {
            if(entry.isIntersecting)
            {
            entry.target.classList.add('PptBoxHide')
          }
            }
         })});

    const hiddenElements1 = document.querySelectorAll('.PptBox');
    hiddenElements1.forEach((el) => observer1.observe(el));


  },[])









const cover=()=>
{
  var element = document.querySelectorAll(".PptBox");
  for(var i=0;i<element.length;i++)
  {
    element[i].classList.add("PptCover")
  }
}
const coverRemove=()=>
{
  var element = document.querySelectorAll(".PptBox");
  for(var i=0;i<element.length;i++)
  {
    element[i].classList.remove("PptCover")
 
  }
}

  return (
    <>
    <div className='Contact'>
      <div className='PptTitle hidden'>PRESENTATIONS
        <div ><hr/></div>
      </div>
      <div className='PptContainer'>
        <div className='PptBox ' id='PptBox1' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href=""><img src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt="" />
          <div className='PptBoxTitle'>Hello</div>
          <div className="Pptdate">April 20,2016</div>
          <hr />
          <div className="PptText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi in nobis animi ex distinctio officiis quod, quasi eveniet dolores quo quas nulla? Atque facere, debitis reprehenderit magni explicabo rerum tempore.</div>
          </a>
        </div>
        <div className='PptBox ' id='PptBox2' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href=""><img src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?s=612x612&w=0&k=20&c=4FJ_fzzZYqBoGG-RY8fcohpaOKKwnnI-ik58cPy6t-g=" alt="" />
          <div className='PptBoxTitle'>Hello</div>
          <div className="Pptdate">April 20,2016</div>
          <hr />
          <div className="PptText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi in nobis animi ex distinctio officiis quod, quasi eveniet dolores quo quas nulla? Atque facere, debitis reprehenderit magni explicabo rerum tempore.</div>
          </a>
        </div>
        <div className='PptBox' id='PptBox3' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href=""><img src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt="" />
          <div className='PptBoxTitle'>Hello</div>
          <div className="Pptdate">April 20,2016</div>
          <hr />
          <div className="PptText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi in nobis animi ex distinctio officiis quod, quasi eveniet dolores quo quas nulla? Atque facere, debitis reprehenderit magni explicabo rerum tempore.</div>
          </a>
        </div>
        <div className='PptBox ' id='PptBox4' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href=""><img src="https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png" alt="" />
          <div className='PptBoxTitle'>Hello</div>
          <div className="Pptdate">April 20,2016</div>
          <hr />
          <div className="PptText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi in nobis animi ex distinctio officiis quod, quasi eveniet dolores quo quas nulla? Atque facere, debitis reprehenderit magni explicabo rerum tempore.</div>
          </a>
        </div>
        
      </div>



    </div>
    
    </>
  )
}
