import React from 'react'
import "../Portfolio.css"
import Modalex from './Modalex'
export default function ProjectGrid(props) {

  const setCard = () => {
    props.setCard(1)
  }

  return (
    <>
      
      <div className={`${(props.ss==1)?`projectGrid`:``}`}>
        <div className='imageCover'>
          <div className='Title'>
            <h4>{props.Title}</h4>
            <p>{props.Technology}</p>
            </div>
        <div id='buttonBox' onClick={setCard}>
          <Modalex link={props.link} Title={props.Title} text={props.text} image1={props.image1} image2={props.image2} />
          </div>
        </div> 
        <img src={props.MainImg} alt="" />
    </div>

    </>

  )
}
