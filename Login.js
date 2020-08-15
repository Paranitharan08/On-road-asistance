import React, { Component } from 'react'
import { Card, CardContent, TextField, FormControl, Grid, Button, Paper } from '@material-ui/core'
import bg from './images/car.jpg';
import {ValidatorForm} from 'react-form-validator-core';

const style = {
    card : {
        width:300,
        height:300,
        backgroundColor:"white",
        marginTop:"10%",
        marginLeft:"60%",
        opacity:10,
        borderRadius:30, 
    }
}

export default class Login extends Component{
    constructor(){
        super();
    }
    render(){
        return(
          <div style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh",width:"100vw"}}>
            <div>
            <Card>

            </Card>
            <Card style={style.card}>
              <CardContent>
              <ValidatorForm>
                <TextField 
                variant="standard" 
                label="Username" 
                style={{marginTop:40,backgroundColor:"lightgrey",borderRadius:10}}
                />

                <TextField 
                variant="standard" 
                label="Password" 
                style={{marginTop:10,backgroundColor:"lightgrey",borderRadius:10}}
                type="password"
                />

                <Button
                variant="outlined"
                name="Login"
                style={{marginTop:10,color:"black",backgroundColor:"mediumturquoise",marginLeft:80,borderRadius:20}}
                >Login</Button>
              </ValidatorForm>
              <boom>
                Don't have an account?. Signup <a href="#">here</a>
              </boom>
              </CardContent>
            </Card>
            </div>
          </div>
        )
    }
}