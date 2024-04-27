import React from 'react'
import Container from 'react-bootstrap/Container';
import Sidebar from  './Sidebar'
import '../Common.css'
import { NavLink } from 'react-router-dom';

const Nvbar = () => {
  return (
    <div>
      <Container fluid className='bk'>
 <Container>
 <nav class="navbar navbar-expand-lg navbar-light bg-transparant">
  <div class="container-fluid">
    <a class="navbar-brand fs-3 fw-bold" href="#">Brands</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/" className="text-decoration-none">  <a class="nav-link active" aria-current="page" href="#">Contact</a>
      </NavLink>
          </li>
      
      </ul>
      <Sidebar/>
    </div>
  </div>
</nav>
 </Container>
 </Container>
    </div>
  )
}

export default Nvbar