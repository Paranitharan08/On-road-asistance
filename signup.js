import React, { Component } from 'react'
import { Card, CardContent, TextField, FormControl, Grid, Button, Paper } from '@material-ui/core'
import sign from './images/signup.jpg'
import {ValidatorForm} from 'react-form-validator-core';

const style = {
    card : {
        width:300,
        height:450,
        backgroundColor:"honeydew",
        marginTop:"10%",
        marginLeft:"20%",
        opacity:0.7,
        borderRadius:30, 
    }
}

export default class Signup extends Component{
    constructor(){
        super();
    }
    render(){
        return(
          <div style={{backgroundImage:`url(${sign})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh",width:"100vw"}}>
            <div>
            <Card>

            </Card>
            <Card style={style.card}>
              <CardContent>
              <ValidatorForm>
                <TextField 
                variant="standard" 
                label="Username" 
                style={{marginTop:40,backgroundColor:"azure",borderRadius:10, color:'red'}}
                />
                
                <TextField 
                variant="standard" 
                label="Email" 
                style={{marginTop:10,backgroundColor:"azure",borderRadius:10}}
                />

                <TextField 
                variant="standard" 
                label="Mobile Number" 
                style={{marginTop:10,backgroundColor:"azure",borderRadius:10}}
                />

                <TextField 
                variant="standard" 
                label="Password"
                type="password" 
                style={{marginTop:10,backgroundColor:"azure",borderRadius:10}}
                />

                <TextField 
                variant="standard" 
                label="Confirm Password" 
                style={{marginTop:10,backgroundColor:"azure",borderRadius:10}}
                type="password"
                />

                <Button
                variant="outlined"
                name="Login"
                style={{marginTop:10,color:"black",backgroundColor:"lightblue",marginLeft:80,borderRadius:20}}
                >Signup</Button>
              </ValidatorForm>
              <boom>
                Already have an account?. Login <a href="#">here</a>
              </boom>
              </CardContent>
            </Card>
            </div>
        //   </div>
        )
    }
}