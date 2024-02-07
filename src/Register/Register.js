import React, {useState} from 'react'
import './Register.css'

// Material UI Imports
import {Tab, Tabs, TextField, IconButton, Button, ToggleButton, ToggleButtonGroup, Alert} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

import logo from '../frame-14.svg'
import line from './line.png'
import {Link} from 'react-router-dom'

const isEmail = (email) => 
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const Register = () => {
    const [tabValue, setTabValue] = useState(1);

    // Inputs
    const [usernameInput, setUsernameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    // Input Errors
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Form Validity
    const [formValid, setFormValid] = useState();
    const [success, setSuccess] = useState();

    const handleChange = (event, newValue) => {
        setTabValue(newValue); // Update the tab value when a tab is changed
    };

    const [alignment, setAlignment] = React.useState('male');

    const handleToggle = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Print username and password to console when sign up
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSuccess(null);

        // if (usernameError || !usernameInput) {
        //     setFormValid(
        //         "Username is Between 5-15 characters long. Please Re-Enter"
        //     )
        // }

        if (emailError || !emailInput) {
            setFormValid(
                "Email is INVALID. Please Re-Enter"
            )
            return;
        }

        if (passwordError || !passwordInput) {
            setFormValid(
                "Password is set to 5-20 characters. Please Re-Enter"
            )
            return;
        }

        setFormValid(null);
        setSuccess("Form Submitted Successfully");
        
        console.log(usernameInput);
        console.log(emailInput);
        console.log(passwordInput);
    }

    // Validation for username
    const handleUsername = () => {
        if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 20) {
            setUsernameError(true);
            return;
        }

        setUsernameError(false);
    }

    // Validation for email
    const handleEmail = () => {
        if (!isEmail(emailInput)) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
    }

    // Validation for password
    const handlePassword = () => {
        if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
    }

    return (
        <div className="register">
            <div className="div-2">
                <div className="group">
                    <p className="AI-ci-ti">
                        <span className="text-wrapper-6">AI</span>
                        <span className="text-wrapper-7">CiTi</span>
                    </p>
                    <img className="img" alt="Frame" src={logo} />
                </div>                
                <div className="frame-2">
                    <Tabs className="frame-3" onChange={handleChange} textColor="primary" indicatorColor="primary" value={tabValue}>                        
                        <Tab className="tabs-instance" label="Log - in" href='/login'></Tab>                                               
                        <Tab className="tabs-instance" label="Sign - up" href='register'></Tab>                        
                    </Tabs>
                    <div className='frame-4'>
                        <div className='frame-5'>
                            <TextField className="input-field-instance" id="username" label="ID or email" value={emailInput} error={emailError}
                                onChange={(event) => setEmailInput(event.target.value)} 
                                onBlur={handleEmail}
                                variant="outlined" 
                                type="text" 
                                sx={{m:1, width: '50ch'}}></TextField>
                            <TextField 
                                className="input-field-instance" 
                                id="password" 
                                label="Password"
                                value={passwordInput}
                                error={passwordError}                                
                                onChange={(event) => setPasswordInput(event.target.value)}
                                onBlur={handlePassword}                           
                                variant="outlined" 
                                type={showPassword ? 'text' : 'password'} 
                                sx={{m:1, width: '50ch'}}
                                InputProps={{
                                    endAdornment: (
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    ),
                                }}                                
                            >
                            </TextField>
                            <div className='frame-6'>
                                <TextField 
                                    className="input-field-2" 
                                    id="birthday" 
                                    label="Birthday" 
                                    variant="outlined" 
                                    type="date" 
                                    sx={{m:1, width: '220px', height: '56px'}} 
                                    InputLabelProps={{
                                        shrink: true,
                                      }}
                                    >
                                </TextField>
                                <div className='frame-7'>
                                    <div className="text-wrapper-5">Gender</div>
                                    <ToggleButtonGroup
                                        className='frame-8'
                                        color="primary"
                                        value={alignment}
                                        exclusive
                                        onChange={handleToggle}
                                        aria-label="Platform"
                                        >
                                        <ToggleButton value="male" className='toggleBtn'>Male</ToggleButton>
                                        <ToggleButton value="female" className='toggleBtn'>Female</ToggleButton>                                        
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                            <img className='line' alt='Line' src={line} ></img>
                            <div className='frame-6'>
                                <TextField className="input-field-2" id="pass" label="Password" variant="outlined" type='password' sx={{m:1, width: '200px', height: '56px'}} ></TextField>
                                <TextField className="input-field-2" id="re-pass" label="Re - enter password" variant="outlined" type='password' sx={{m:1, width: '200px', height: '56px'}} ></TextField>
                            </div>
                        </div>
                        <Link to="/home">
                            <Button className="component-1" onClick={handleSubmit} variant="contained">LOGIN</Button>
                            <p>{formValid && (<Alert severity="error">{formValid}</Alert>)}</p>
                            <p>{success && (<Alert severity="success">{success}</Alert>)}</p>
                        </Link>     
                    </div>  
                </div>
                <p className="produced-by-ainsight">
                    <span className="span">
                        Produced by
                        <br />
                    </span>
                    <span className="text-wrapper-3">&nbsp;</span>
                    <span className="text-wrapper-4">AInsight Inc.</span>
                </p>
            </div>
        </div>
    )
}