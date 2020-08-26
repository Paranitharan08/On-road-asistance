import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Paper, Typography, Card } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from '@material-ui/core/Icon'

const style = {
    root: {
      backgroundColor:'#cdc9c9',
      marginTop: "10%",
      color: 'black',
      // marginLeft: "40%",
      textAlign: 'center',
      // width: 300,
      // height: 400
    }
  }

export default class Register extends Component{
    constructor(){
        super();

        this.state = { 
            email:"",
            username:"",
            password:"",
            confirmpassword:"",
            message:"",
        };
    }

    componentDidMount() {
      // custom validation to verify password 
      ValidatorForm.addValidationRule('isName', (value) => {
          if ((this.state.username.length) >3 && (this.state.username.length) <20){
              return true; 
          }
          return false;            
      });
      // custom validation to verify password
      ValidatorForm.addValidationRule('isPassword', (value) => {
        if ((this.state.password.length) >8 && (this.state.password.length) <20){
            return true; 
        }
        return false;            
    });

      // confirm password validation
      ValidatorForm.addValidationRule('isConfirmpw',(value)=> {
        if ((this.state.password) == (this.state.confirmpassword)){
          return true;
        }
        return false;
    } );
    }
    

    
    handleUnameChange= (e) => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
        console.log(this.state.email);
    }
    handlePasswordchange = (e) => {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }
    handleconfirmPasswordchange = (e) => {
      this.setState({
          confirmpassword: e.target.value
      });
      console.log(this.state.confirmpassword);
  }

    handleSubmit= (e) => {
        e.preventDefault();
        
        if (this.state.username && this.state.email && this.state.password) {
            console.log(this.state.username + " " + this.state.password + " " + this.state.email)
            this.setState({
              successful: true,
              message: "Registered successfully"
            })
          } else {
            this.setState({
              successful: false,
              message: "username/password/email is empty"
            })
          }

    }

    render(){
       const {email, username, password, confirmpassword} = this.state;
        return(
            <div>
            <Paper elevation={10} style={style.root}>
              <Card style={{marginTop:20}}>
                  <AccountCircleRoundedIcon style={{height:40,width:40}}/>
                  <h2>Signup to Piston</h2>
                  <ValidatorForm
                  ref="form"
                  onSubmit={this.handleSubmit}
                  onError={errors => console.log(errors)}>

                  <TextValidator
                  label='UserName'
                  onChange={this.handleUnameChange}
                  name="username"
                  value={username}
                  validators={['required','isName']}
                  errorMessages={['this field is required','enter a valid username']} />

                  <br></br>
                  
                  <TextValidator
                  label='Email'
                  onChange={this.handleEmailChange}
                  name="email"
                  value={email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}/>
                  <br/>

                  <TextValidator
                  label='Password'
                  type="password"
                  onChange={this.handlePasswordchange}
                  name="password"
                  value={password}
                  validators={['required','isPassword']}
                  errorMessages={['this field is required','enter a valid password']}/>
                  <br/>
                  
                  <TextValidator
                  label='Cofirm Password'
                  type="password"
                  onChange={this.handleconfirmPasswordchange}
                  name="password"
                  value={confirmpassword}
                  validators={['required','isConfirmpw']}
                  errorMessages={['this field is required','your password is not matching']}/>
                  <br/>

                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                  <br/>

                    {
                      this.state.message && (
                      <div>
                        <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                            <strong>{this.state.message}</strong>
                        </Typography>
                      </div>
                    )
                    }
                    <br/>
              </ValidatorForm>
              </Card>
            </Paper>
            </div>
        );

    }
}
