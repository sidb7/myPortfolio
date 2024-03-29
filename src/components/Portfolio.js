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
    
    props.SetTabs('Java')
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
    props.SetTabs('SpringBoot')
  }
 
  let data1 = 
    [
      {   Title:'Coal mine safety and health monitoring system.',
          Technology:'SpringBoot',
          text:"It is a web-based application that utilizes the React framework for the front-end, Spring Boot for the back-end, and ESP8266 for the embedded systems.The app is designed to enhance the safety and health of coal miners in the mining industry by providing real-time monitoring of various factors such as heart rate, temperature, humidity, and surrounding gas levels.",
          image1:"imagesPORT/Screenshot_1525.png",
          image2:"imagesPORT/Screenshot_1523.png",
          MainImg:"imagesPORT/miners-free-template-1.jpg"
        },
        {
          Title:'KanbanFlow',
          Technology:'React',
          text: `KanbanFlow is a dynamic project management tool designed to streamline your workflow with its intuitive interface and robust features. Developed using React.js, this Kanban Board incorporates cutting-edge technology to enhance task organization and collaboration. The project leverages the power of React DND (Drag and Drop) to enable effortless task movement across different swim lanes, providing a seamless and interactive user experience. One of the standout features of KanbanFlow is its utilization of the web browser's local storage. This strategic implementation ensures that the state of each task within its respective swim lane is persistently stored. This means that even if you refresh the page or encounter an unexpected closure, your data and task states remain intact, eliminating the frustration of losing progress and details. To ensure a seamless user experience across devices, KanbanFlow is built with responsive design principles using Bootstrap.` ,
          link: 'https://sidb7.github.io/TrelloManagement/',
          image1:"imagesPORT/Screenshot_1525.png",
          image2:"imagesPORT/Screenshot_1523.png",
          MainImg:"imagesPORT/miners-free-template-1.jpg"
        },
      {   Title:'News Daily - Daily Headlines web based app',
          Technology:'React',
          text:'The Daily Top Headlines app is a web-based application built using the React framework. The app fetches data from a third-party API and displays the top news headlines from various categories such as business, entertainment, sports, technology, and more.',
          image1:'imagesPORT/Screenshot (1654).png',
          image2:'imagesPORT/Screenshot (1655).png'
          ,MainImg:"imagesPORT/[Downloader.la]-64cd19ffa45fc.jpg"
        },
      {   Title:'Data registration software using JFrame and JDC.',
          Technology:'Java',
          text:'This project is a robust and user-friendly Data Registration Software built using Java technologies including Java Swing, JDBC and Java Servlet using Apache Tomcat server. The software provides a graphical interface for performing CRUD (Create, Read, Update, Delete) operations on user data stored in a database. The primary focus of the software is to efficiently manage user information, including user IDs, usernames, and passwords.',
          image1:'imagesPORT/JDBC1.JPG',
          image2:'imagesPORT/JDBC2.JPG'
          ,MainImg:"imagesPORT/JDBC4.JPG"
        },
      // {   Title:'SlimJim',
      //     Technology:'React',
      //     text:'dknfdn dkgnkdgg a;fm',
      //     image1:'https://www.intechnic.com/hs-fs/hubfs/Imported_Blog_Media/Best-restaurant-website-design-inspirations_4_michiramen-3.jpg?width=1024&height=512&name=Best-restaurant-website-design-inspirations_4_michiramen-3.jpg',
      //     image2:'https://www.kyozou.com/wp-content/uploads/2019/07/How-to-Select-Products-for-an-e-commerce-Store-1.jpg'
      //     ,MainImg:"imagesPORT/miners-free-template-1.jpg"
      //   },
      
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
     <ProjectGrid link={element.link} setCard={props.setCard} ss={ss} card = {props.card} Title = {element.Title} Technology = {element.Technology} text = {element.text} MainImg={element.MainImg} image1={element.image1} image2={element.image2}/>  
     :""); 
       })} 
    </div>
    :""}

    
    </div>
    </section>
    </>
  )
}
