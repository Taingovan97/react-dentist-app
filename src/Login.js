import React, {useState} from "react";
import {Tab, Tabs, TextField, IconButton, FormHelperText, Button} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import './Login.css';
import {Link} from 'react-router-dom'
import logo from './frame-14.svg'

function Login() {
  const [tabValue, setTabValue] = useState(0); // Set the initial tab value

  const handleChange = (event, newValue) => {
    setTabValue(newValue); // Update the tab value when a tab is changed
  };
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="div-2">
        <div className="group">
          <p className="AI-ci-ti">
            <span className="text-wrapper-5">AI</span>
            <span className="text-wrapper-6">CiTi</span>
          </p>
          <img className="img" src={logo} alt="Frame"></img>
        </div>
        <div className="frame-2">
          <Tabs className="frame-3" onChange={handleChange} textColor="primary" indicatorColor="primary" value={tabValue}>
            <Tab className="tabs-instance" label="Log - in" href="/login"></Tab>
            <Tab className="tabs-instance" label="Sign - up" href="/register"></Tab>
          </Tabs>
          <div className="frame-4">
            <div className="frame-5">
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
                helperText={
                  <FormHelperText style={{color:'blue', fontSize:'14px', textAlign:'right'}}>
                    Forgot your password?
                  </FormHelperText>
                }
              >
              </TextField>
              <Link to="/home">
                <Button className="component-1" variant="contained">LOGIN</Button>
              </Link>

            </div>

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

    
  );
}

export default Login;
