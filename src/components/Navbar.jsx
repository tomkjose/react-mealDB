import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from "react-router-dom"
import * as React from 'react';

function Navbar() {
   
 
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
 
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <div>
      <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:"#fbb726"}}>
        <Toolbar disableGutters>
            
          <FastfoodIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Nunito',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MealsDB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
               
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu} sx={{backgroundColor:'#fbb726'}}>
                  <Typography textAlign="center"><Link to='/' style={{color: 'white', backgroundColor:'#fbb726'}}>Home</Link></Typography>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu} sx={{backgroundColor:'#fbb726'}}>
                  <Typography textAlign="center"><Link to='/random' style={{color: 'white', backgroundColor:'#fbb726'}}>Random</Link></Typography>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu} sx={{backgroundColor:'#fbb726'}}>
                  <Typography textAlign="center"><Link to='/about' style={{color: 'white', backgroundColor:'#fbb726'}}>About Us</Link></Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <FastfoodIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Nunito',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MealsDB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
            
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',backgroundColor:"#fbb726" }}
              >
                <Link to='/' style={{color: 'white'}}>Home</Link>
              </Button>
              <Button
            
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block',backgroundColor:"#fbb726" }}
          >
            <Link to='/random' style={{color: 'white'}}>Random</Link>
          </Button>
          <Button
            
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block',backgroundColor:"#fbb726"  }}
          >
            <Link to='/about' style={{color: 'white'}} >About Us</Link>
          </Button>
     
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Navbar
