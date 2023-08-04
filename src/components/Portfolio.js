import React, { useEffect, useState } from 'react'
import "../Portfolio.css"
import ProjectGrid from './ProjectGrid';
export default function Portfolio(props) {

  const [ss,setss] = useState(0)
  

  useEffect(()=>{

    const observer = new IntersectionObserver((enteries) =>
    { 
      enteries.forEach((entry) =>{
          
          if(entry.isIntersecting)
          {
            if(entry.isIntersecting)
            {
            
            
            entry.target.classList.add("headingAni")}
          }
          
         
      })
    }
    );
  
  
    const hiddenElements = document.querySelectorAll('.hidden1');
    hiddenElements.forEach((el) => observer.observe(el));
  


    const observer1 = new IntersectionObserver((enteries) =>
    { 
      enteries.forEach((entry) =>{
      
          if(entry.isIntersecting)
          {
            if(entry.isIntersecting)
            {
           setss(1)
            }
          }
          
         
      })
    }
    );
  
  
    const hiddenElements1 = document.querySelectorAll('.Portfolio');  
    hiddenElements1.forEach((el) => observer1.observe(el));

    

  
  },[])

  const [ButtonColor,setcolor] = useState(1);
  const Button1=()=>
  {
     var element = document.getElementById("NavButton1");
    element.className='NavButons'
     element.classList.add('slider');
    setcolor(1);
    props.SetTabs('1')
    
  }
  const Button2=()=>
  {
     var element = document.getElementById("NavButton1");
     element.className='NavButons'
     element.classList.add('slider1');
    setcolor(2);
  setss(1);
    
    props.SetTabs('JavaScript')
  }
  const Button3=()=>
  {
     var element = document.getElementById("NavButton1");
     element.className='NavButons'
     element.classList.add('slider2');
    setcolor(3)
    setss(1);
    props.SetTabs('React')
  }
  const Button4=()=>
  {
     var element = document.getElementById("NavButton1");
     element.className='NavButons'
     element.classList.add('slider3');
    setcolor(4)
    setss(1);
    props.SetTabs('Css')
  }
 
  let data1 = 
    [
      {   Title:'Coal mine safety and health monitoring system.',
          Technology:'Css',
     
          text:"It is a web-based application that utilizes the React framework for the front-end, Spring Boot for the back-end, and ESP8266 for the embedded systems.The app is designed to enhance the safety and health of coal miners in the mining industry by providing real-time monitoring of various factors such as heart rate, temperature, humidity, and surrounding gas levels.",
          image1:'imagesPORT\Screenshot_1525.png',
          image2:'imagesPORT\Screenshot_1523.png'
        },
      {   Title:'News Daily - Daily Headlines web based app',
          Technology:'React',
          text:'The Daily Top Headlines app is a web-based application built using the React framework. The app fetches data from a third-party API and displays the top news headlines from various categories such as business, entertainment, sports, technology, and more.',
          image1:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'Data registration software using JFrame and JDC.',
          Technology:'JavaScript',
          text:'A data registration software capable of performing CRUD operations on the data such as user ID, username and passwords that is stored in the Database.',
          image1:'https://img.freepik.com/free-photo/website-design-content-layout-graphic_53876-21203.jpg?w=1380&t=st=1689221748~exp=1689222348~hmac=09d3af49df204a9cf210d1778436a2108570ad9780693159a51eb3b69f5ade85',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'SlimJim',
          Technology:'React',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://www.intechnic.com/hs-fs/hubfs/Imported_Blog_Media/Best-restaurant-website-design-inspirations_4_michiramen-3.jpg?width=1024&height=512&name=Best-restaurant-website-design-inspirations_4_michiramen-3.jpg',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'TextUtils',
          Technology:'JavaScript',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://themewagon.com/wp-content/uploads/2021/10/feane-1.png',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'Haha',
          Technology:'Css',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://img.freepik.com/free-photo/keyword-seo-content-website-tags-search_53876-120179.jpg?w=1060&t=st=1689221840~exp=1689222440~hmac=b9a6ee6cbf80de8c16f38230b66191e38cfbdd0767b6a832d98a500a33a99416',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'HelloApp',
          Technology:'JavaScript',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://img.freepik.com/premium-photo/responsive-design-e-magazine-website-devices-isolated-white-background-3d-rendering-mockup_72104-3724.jpg?w=1380',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'NewsApp',
          Technology:'JavaScript',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://colorlib.com/wp/wp-content/uploads/sites/2/miners-free-template-1.jpg',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      {   Title:'NewsApp',
          Technology:'JavaScript',
          text:'dknfdn dkgnkdgg a;fm',
          image1:'https://img.freepik.com/free-vector/hand-drawn-weather-effects_23-2149117711.jpg',
          image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
        },
      
    ]
  
 
  return (
    <>
    <section>
      <br />
    <div className='Portfolio'>
      
    <div id='projectHeading' className='hidden1'> 
      <h1>PROJECTS</h1>
        <h1><hr /> </h1>
       </div>


       <div className='GridNav hidden1'> 
       <div className='slider' id='NavButton1'></div>
       <div className='NavButtons'  style={{color:(ButtonColor==1)?"white":""}} onClick={Button1} >ALL</div>
       <div className='NavButtons' style={{color:(ButtonColor==2)?"white":""}} onClick={Button2}  onMouseDown={()=>setss(0)}>JAVA</div>
       <div className='NavButtons' style={{color:(ButtonColor==3)?"white":""}} onClick={Button3}  onMouseDown={()=>setss(0)}>REACT-JS</div>
       <div className='NavButtons' style={{color:(ButtonColor==4)?"white":""}} onClick={Button4}  onMouseDown={()=>setss(0)}>SPRINGBOOT</div>

        </div>
  
   
   {(ss==1)?
   <div className='projectGridContainer' id='dd' > 

      { data1.map((element) => {
        console.log(element);
     return (
      (props.Tabs===element.Technology||props.Tabs==="1")?
     <ProjectGrid setCard={props.setCard} ss={ss} card = {props.card} Title = {element.Title} Technology = {element.Technology} text = {element.text} image1={element.image1} image2={element.image2}/>  
     :""); 
       })} 
    </div>
    :""}

    
    </div>
    </section>
    </>
  )
}
