import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';


const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <React.Fragment>
  
    <Card className={classes.root}>
      <CardHeader style={{marginLeft: '0', width: '100%', borderBottom: '2px solid #000', textAlign: 'center'}} title="Track your expenses"/>
      <CardContent>
        <Typography align="center" variant="h5">Your Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </React.Fragment>
  );
};

export default ExpenseTracker;
