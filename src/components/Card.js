import React from 'react'
import "../Card.css"
import {RiCloseFill} from "react-icons/ri";
export default function Card(props) {

    const setCard=()=>
    {
        props.setCard(0)
    }

  return (
    <div className='Card'>
        <div id='cardLayer'   onClick={setCard}></div>
        <div className={`${(props.card!=0)?`cardBody`:'cardBodyExit' }`}>

          <div id='imageSlide'>

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://attachment.eab.com/wp-content/uploads/2020/04/37060-EAB-BrandingServices-04.03.20-v2-e1649432898408.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


          </div>
          <hr />
          <div id='cardText'></div>
        <div className='closeButton' onClick={setCard}><RiCloseFill size={50} opacity={0.8} id='closeIcon'/></div>
        </div>
        
    </div>
  )
}
