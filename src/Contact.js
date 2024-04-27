import React from 'react'
import Nvbar from './common/Nvbar'
import Container from 'react-bootstrap/esm/Container'

const Contact = () => {
  return (
    <div><Nvbar/>
    <h2 className='text-center mt-5'>Welcome to Contact Page</h2>
    <Container fluid className='mt-5'>
    <iframe className='border-0 w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7217849797144!2d75.77397677409029!3d26.81698596420034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcbbcfd0925db%3A0x22ec7cb26959fc18!2sRIYA%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1714113350568!5m2!1sen!2sin"  height="450"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
    </div>
  )
}

export default Contact