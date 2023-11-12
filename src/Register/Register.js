import React, {useState} from 'react'
import './Register.css'
import {Tab, Tabs, TextField, IconButton, Button, ToggleButton, ToggleButtonGroup} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import logo from '../frame-14.svg'
import line from './line.png'
import {Link} from 'react-router-dom'

export const Register = () => {
    const [tabValue, setTabValue] = useState(1);

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
                            <TextField className="input-field-instance" id="username" label="ID or email" variant="outlined" type="text" sx={{m:1, width: '50ch'}}></TextField>
                            <TextField 
                                className="input-field-instance" 
                                id="password" 
                                label="Password" 
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
                            <Button className="component-1" variant="contained">LOGIN</Button>
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