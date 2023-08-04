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
    
    <div className='Presentation'>
      <div className='PptTitle hidden'>PRESENTATIONS
        <div ><hr/></div>
      </div>
      <div className='PptContainer'>

      <div className='PptBox ' id='PptBox4' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1APnPEAutZ1Tj-HP6KSOEj4tWEF_YsTiR/view?usp=sharing" target='_blank'><img src="miners.JPG" alt="" />
          <div className='PptBoxTitle'>Smart Wearables</div>
          <div className="Pptdate">March 30,2023</div>
          <hr />
          <div className="PptText">Out of the 40 proposals submitted, our project, presented under the name "Smart Wearables for Miners" was awarded the second position in the Industry 4.0 domain. Prize money of Rs.4000 was awarded for the project with certificates.  </div>
          </a>
        </div>

        <div className='PptBox ' id='PptBox1' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1vXawFQibZxh0PDoOs38v6Nlml2Iwb424/view?usp=sharing" target='_blank'><img src="minine.JPG" alt="" />
          <div className='PptBoxTitle'>Smart Coal Mine</div>
          <div className="Pptdate">March 20, 2023</div>
          <hr />
          <div className="PptText">India is home to 1,531 operating mines and produces 95 minerals, which includes 4 fuels, 10 metallic, 23 non-metallic, 3 atomic and 55 minor minerals. For years, safety has been a major concern in the mining industry. </div>
          </a>
        </div>

        <div className='PptBox' id='PptBox3' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1U9sBAVoKsCio9z4BgA1DXmXQiSrBbGo_/view?usp=sharing" target='_blank'><img src="Linuximg.png" alt="" />
          <div className='PptBoxTitle'>Linux Automation</div>
          <div className="Pptdate">December 20,2021</div>
          <hr />
          <div className="PptText">My expertise extends to the seamless management of critical services, including SSH, Apache, NFS, FTP, Samba, and DNS, each playing a pivotal role in ensuring smooth and secure operations within diverse environments.</div>
          </a>
        </div>
        
        <div className='PptBox ' id='PptBox2' onMouseEnter={cover} onMouseLeave={coverRemove}>
          <a href="https://drive.google.com/file/d/1pq5N_WODtlQ-Ookdi5Dz-N1KX5-dqKiB/view?usp=sharing" target='_blank'><img src="datajava.JPG" alt="" />
          <div className='PptBoxTitle'>Java Programming</div>
          <div className="Pptdate">October 18, 2021</div>
          <hr />
          <div className="PptText">Passionate about the art of coding and the endless possibilities it holds, through rigorous training and unwavering commitment, I have successfully delved into both the fundamental principles and advanced intricacies of Java.</div>
          </a>
        </div>
  
        
      </div>



    </div>
    
    </>
  )
}
