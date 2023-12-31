import React from 'react'
import { Container,Button,makeStyles } from '@mui/material'
import "../styles/index.css"
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='homeContainer'>
      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src="images/404.webp" alt='not-found' />
        <Button variant="contained" sx={{backgroundColor:"#fbb726","&:hover":{backgroundColor:"#f7ac0a"}}} className='home-btn' onClick={()=>navigate('/') }>Home</Button>
      </Container>
    </div>
  )
}

export default NotFound
