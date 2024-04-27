import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const but = [{
      clk:"Cloths",
      p:"/cloth"
    },
    {
      clk:"Jewellaries",
      p:"/jewellary"
    }
 ]
  return (
    <div>
    
        <Button variant="success" onClick={handleShow}>
        More
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center'>
       {
        but.map((p,i)=>{
          return(
          <div>
            <NavLink to={p.p} className="text-decoration-none"> 
              <Button className='w-75 mb-2 fs-6' key={i} variant="primary">{p.clk}</Button> </NavLink>
        
       <br/>
          </div>
          )
        })
       }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidebar