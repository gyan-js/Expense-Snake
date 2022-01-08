import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

 // gives image path
 import landscape from '../src/assets/landscape.png'

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';
import './App.css';

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

 

  return (
    
    <div>
      

      <img src={landscape} className='logoImage' />
      <Grid  className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh', }}>
        <Grid item xs={12} sm={4} className={classes.mobile} >
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
       
      </Grid>
    </div>
  );
};



export default App;
