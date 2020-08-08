import React, { Component } from 'react';
import {AppBar, Button, Typography,Toolbar, IconButton, Grid, Paper, Card, CardContent} from '@material-ui/core'
import { blue, cyan, red } from '@material-ui/core/colors';
import Footer from './Footer';

const style = {
    card : {
        backgroundColor:"darkslategrey",
        height:254,
        width:500,
        marginTop:150,
        marginLeft:350,
    },
    line: {
        height:10,
        backgroundColor:"black",
        width:3,
        marginLeft:240
    },
    buttonl: {
        height:100,
        width:150,
        backgroundColor:"lightgreen"
    }
  }

export default class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            <div>
                <AppBar position="static" style={{backgroundColor:"black"}}>
                    <Toolbar>
                    
                        
                        <Typography variant="h6" style={{backgroundColor:"royalblue", color:"black",}}>
                            Piston
                        </Typography>
                        
                        <Grid item xs={10}>
                        <Button color="inherit" >About us</Button>
                        
                        <Button color="inherit">Police help</Button>
                    
                        <Button color="inherit" >Ambulance service</Button>
                        </Grid>
                        <Grid item xs={2}>
                        <Button color="inherit">Contact us</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            <Paper elevation={0}>
                <Card style={style.card} elevation={12}>
                <CardContent>
                    <Card style={{width:450,height:100,}} elevation={5}>
                    <Button style={style.buttonl}>
                        Login as user
                    </Button>
                    Don't have an account?.
                    Signup <a href="#">Here.</a>
                    </Card>
                    
                    <Card elevation={5} style={{width:450,height:100,marginTop:20}}>
                    <Button  style={style.buttonl} >
                    Login as <br></br>service provider
                    </Button>
                    Don't have an account?.
                    Signup <a href="#">Here.</a>
                    </Card>
                    
                </CardContent>
                </Card>
            </Paper>
            <Footer/>
            </div>   
        )   
    }
}