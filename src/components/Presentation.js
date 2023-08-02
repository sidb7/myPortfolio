import React, { useEffect } from 'react'
import "../Presentation.css"
import "../App.css"
export default function Presentation(props) {
 


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
          {  {props.setcolor(3)}
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
    
    <div className='Presentation'>
      <div className='PptTitle hidden'>PRESENTATIONS
        <div ><hr/></div>
      </div>
      <div className='PptContainer'>
        <div className='PptBox ' id='PptBox1' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1e4a-JsUmvAYA449P-8jIqwCh-RT9KTH6/view?usp=sharing" target='_blank'><img src="minine.JPG" alt="" />
          <div className='PptBoxTitle'>Smart Coal Mine</div>
          <div className="Pptdate">March 20, 2023</div>
          <hr />
          <div className="PptText">India is home to 1,531 operating mines and produces 95 minerals, which includes 4 fuels, 10 metallic, 23 non-metallic, 3 atomic and 55 minor minerals. For years, safety has been a major concern in the mining industry. </div>
          </a>
        </div>
        <div className='PptBox ' id='PptBox2' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1pq5N_WODtlQ-Ookdi5Dz-N1KX5-dqKiB/view?usp=sharing"><img src="datajava.JPG" alt="" />
          <div className='PptBoxTitle'>Java Programming</div>
          <div className="Pptdate">October 18, 2021</div>
          <hr />
          <div className="PptText">Passionate about the art of coding and the endless possibilities it holds, through rigorous training and unwavering commitment, I have successfully delved into both the fundamental principles and advanced intricacies of Java.</div>
          </a>
        </div>
        <div className='PptBox' id='PptBox3' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1U9sBAVoKsCio9z4BgA1DXmXQiSrBbGo_/view?usp=sharing"><img src="Linuximg.png" alt="" />
          <div className='PptBoxTitle'>Linux Automation</div>
          <div className="Pptdate">December 20,2021</div>
          <hr />
          <div className="PptText">My expertise extends to the seamless management of critical services, including SSH, Apache, NFS, FTP, Samba, and DNS, each playing a pivotal role in ensuring smooth and secure operations within diverse environments.</div>
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
