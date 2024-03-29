import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {IoMdClose} from 'react-icons/io'
import Typography from '@mui/material/Typography';
import "../Portfolio.css"
import { a } from '@react-spring/web';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 700,
  // height:700,
  bgcolor: 'rgba(255, 255, 255, 0.920)',
  color:"#4e5053",
  font:' sans-serif',
  borderRadius: 1,
  boxShadow: 24,
  overflow:'scroll',
 
};

export default function Modalex(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     
      <button className='Button1'  onClick={handleOpen}>
        Learn more
     </button> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modelexBox">

          <div>
      
      <div id="carouselExampleControls" className="carousel slide "  data-bs-ride="carousel">
<div className="carousel-inner"  >
  <div className="carousel-item active" >
    <img   src={props.image1} className="d-block w-100 modelexIMG" alt="..."/>
  </div>
  <div className="carousel-item">
    <img  src={props.image2} className="d-block w-100 modelexIMG" alt="..."/>
  </div>
 
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon  position-relative NextPrev "aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon position-relative  NextPrev "   aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

</div>




            <Typography id="transition-modal-title" variant="h5" component="h5" sx={{ mt:4,mb:2 ,px:3}}>
             {props.Title}
             
            </Typography>


            <Typography id="transition-modal-description" sx={{ mt: 1 ,height:140,px:3,textAlign:'justify'}}>
              {props.text}
              {(props.link)? <p>Visit: &nbsp; <a href={props.link} target='_blank'> {props.link}</a></p>:""}
              
            </Typography>
            
          </Box>
         
        </Fade>
      </Modal>
    </div>
  );
}