import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import {Link} from "react-scroll"




const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
   background: "transparent",
   
  },
  navbarScroll: {
    background: "lightgrey",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  
  const [click, setClick] = useState(false);

  const [navBackground, setNavBackground] = useState("navbar");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navRef = React.useRef()
  navRef.current = navBackground


useEffect(() => {
  const changeBackgroundColor = () => {
      if (window.scrollY >= 150) {
        setNavBackground("navbarScroll")
      } else {
        setNavBackground("navbar")
      }
  }

  document.addEventListener("scroll", changeBackgroundColor)
  return ()=> {
    document.removeEventListener("scroll", changeBackgroundColor)
  }
}, [])

  return (   
    <div>
    <AppBar className={classes[navRef.current]} elevation={0}>
      <Toolbar >
       
      <h1 className="nav-title" >
      <Link style={{ textDecoration: 'none', color: "black"}} activeClass="active" to={"Home"} spy={true} smooth={true} offset={-70} duration={500}>
      OBC
      </Link>
          </h1>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <Button className='nav-item'>
          <Link className='nav-links' style={{ textDecoration: 'none', color: "black"}} onClick={closeMobileMenu}  activeClass="active" to={"Home"} spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
          </Button>
          <Button className='nav-item'>
          <Link className='nav-links' style={{ textDecoration: 'none', color: "black"}}  onClick={closeMobileMenu}  activeClass="active" to={"Services"} spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
          </Button>
          <Button className='nav-item'>
          <Link className='nav-links' style={{ textDecoration: 'none', color: "black"}} onClick={closeMobileMenu}  activeClass="active" to={"Gallery"} spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link>
          </Button>
          <Button className='nav-item'>
          <Link className='nav-links' style={{ textDecoration: 'none', color: "black"}} onClick={closeMobileMenu}  activeClass="active" to={"Contact"} spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
          </Button>
          </ul>
      </Toolbar>
    </AppBar>
  </div>
  );
}