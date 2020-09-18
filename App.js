import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/signup';
import {  AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Adminpage from './Components/Admin';
import UserControl from './Components/UserControl';
import Sos from './Components/SOS';
import ServicePcontrol from './Components/ServiceProviderControl';

function App() {
  return (
    <div>
      <Router>
      
            
      <div>
          <AppBar positio="static" elevation={5} style={{backgroundColor:"black",color:"gold"}}>
              <Toolbar>
                  <Typography variant="h6" style={{backgroundColor:"darkgray", color:"black",}}>
                     <a href="/home"> Piston </a>
                  </Typography>
                  
                  <Grid item xs={10}>
                  <Button variant="outlined" color="inherit" href="/sos">Emergency Contact</Button>
                  </Grid>
                  <Grid item xs={2}>
                  <Button variant="outlined" color="inherit" href="/Admin">Contact us</Button>
                  </Grid>
              </Toolbar>
          </AppBar>

          
      </div>
      <div>
        <Switch>
            <Route exact path={["/","/home"]} component={Home}/>
            <Route path={["/Login1"]} component={Login} />
            <Route path={["/signupuser"]} component={Register} />
            <Route path={["/Login2"]} component={Login} />
            <Route path={["/Admin"]} component={Adminpage}/>
            <Route path={["/UserControl"]} component={UserControl}/>
            <Route path={["/sos"]} component={Sos}/>
            <Route path={["/Serviceprovidercontrol"]} component={ServicePcontrol}/>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
