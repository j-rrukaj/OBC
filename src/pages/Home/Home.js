import React, { useEffect, useState } from 'react';
import "./Home.css"
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Collapse } from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  icon: {
    color: 'black',
    fontSize: '2rem',
  },
  colorText: {
    color: 'black',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: '3.5rem',
    fontFamily: 'Comfortaa',
  },
  goDown: {
    color: 'red',
    fontSize: '3rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="Home">
     

    
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={60}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Oliver Building <br />
            <span className={classes.colorText}>Construction.</span>
          </h1>

          <Scroll to="Services" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>

          <Scroll to="Gallery" smooth={true}>
            
  
           </Scroll>

            <Scroll to="Contact" smooth={true}>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}