import React, { useEffect, useState } from 'react'
import Nvbar from './common/Nvbar'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';



const Jewellary = () => {
  const [data, setdata]= useState([]);
  const api=()=>{
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://fakestoreapi.com/products/category/jewelery", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setdata(result);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    api();
  },[])
  return (
    <div><Nvbar/>
    
<Container className='mt-5'>
  <Row>
    {
      data?.map((itm, i)=>{
        return(
          <Col key={i} lg="3" md="3">
            <Card >
            <Card.Body>  <img className='ht w-100' src={itm.image}/>
              <Card.Title className='text-center mt-3'>{itm.category}</Card.Title>
              <Card.Text className='text-center'>{itm.price}</Card.Text></Card.Body>
            </Card>
          </Col>
        )
      })
    }
  </Row>
</Container>

    </div>
  )
}

export default Jewellary