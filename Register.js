import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Paper, Typography, Card, Radio, FormControlLabel, RadioGroup, FormLabel, Checkbox } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from '@material-ui/core/Icon'
import sign from './images/signuppic.jpg';
import divback from './all.css';
import './signup.css';
import car from './images/signuppic.jpg'

const style = {
    card : {
      marginTop:50,
      backgroundColor:"transparent",
      width:"20%",
      marginLeft:"5%",
      height:"80%",
      alignText:"center",
      usertype:""
    },
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
            checked:"",
            usertype:""
        };
    }

    componentDidMount() {
      // custom validation to verify username 
      ValidatorForm.addValidationRule('isName', (value) => {
          if ((this.state.username.length) >3 && (this.state.username.length) <30){
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
  handleconfirmPasswordchange = (e) => {
    this.setState({
        confirmpassword: e.target.value
    });
    console.log(this.state.confirmpassword);
}
    handleuserchange= (e) => {
      this.setState({
        usertype: e.target.value
      });
      console.log(this.state.usertype); 
    }

    handleTermschange= (e) => {
      this.setState({
        checked: e.target.value
      });
    }

    handleSubmit= (e) => {
        e.preventDefault();
        
        if (this.state.username && this.state.email && this.state.password && this.state.usertype && this.state.checked ) {
            console.log(this.state.username + " " + this.state.password + " " + this.state.email)
            this.setState({
              successful: true,
              message: "Registered successfully"
            })
          } else {
            this.setState({
              successful: false,
              message: "please fill all feilds"
            })
          }

    }

    render(){
       const {email, username, password, confirmpassword,usertype,checked} = this.state;
        return(
            <div className="divback" style={{backgroundImage:`url(${sign})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center", minHeight:"100%",minWidth:"100%"}}>
            
            <div>
              <Card style={style.card} elevation={0}>
                  
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
                  <br/>
                  
                  <FormLabel component="legend" style={{color:"gold"}}><b>Register as : </b></FormLabel>
                  <div style={{marginLeft:40}}>
                  <RadioGroup  aria-label="gender" name="gender1" value={usertype} onChange={this.handleuserchange} >
                    <FormControlLabel value="user" control={<Radio />} label="User" />
                    <FormControlLabel value="serviceprovider" control={<Radio />} label="Service Provider" />
                  </RadioGroup>
                  </div>
                  <br/>
                  <Checkbox
                      name="checkedB"
                      color="primary"
                      value="checked"
                      onChange={this.handleTermschange}
                        /><b style={{color:"gold"}}>I have read and understood the terms and conditions</b> <br/><br/>
                  <Button type="submit" variant="contained" style={{backgroundColor:"black",color:"gold"}}>Submit</Button>
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
            </div>
            </div>
        );

    }
}
