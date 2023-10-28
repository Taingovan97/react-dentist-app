import React from "react";
import {Box, List, ListItem, ListItemText, Grid, Button, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './Home.css'
import iconBtn from './right_arrow.svg'

function generate(element) {
    return [0, 1, 2, 3].map((value) =>
        React.cloneElement(element, {
        key: value,
        style: {gap: '30px'}    // space betwwen columns
        }),
    );
}

export const Home = () => {
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);
    
    return (
        <div className="home">
            <div className="div-2">
                <div className="overlap">
                    <div className="dental-patient-list">DENTAL PATIENT LIST</div>            
                    <TextField
                        className="search-instance"
                        label="Search"
                        placeholder="Search by name,id"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <SearchIcon/>
                            )
                        }}
                    >
                    </TextField>
                    <div className="frame-6">
                        {generate(
                            <Grid container spacing={4} >
                                {generate(
                                    <Grid className="frame-wrapper" item xs={12} md={2}>
                                        <div className="frame-screen">                                            
                                            <Box className="ios-g" style={{marginBottom: "5px", color: "white", fontSize: "12px", paddingLeft: "8px", paddingTop: "2px"}}>IOS</Box>                                    
                                            <Box className="cbct" style={{marginBottom: "5px", color: "white", fontSize: "12px", paddingLeft: "8px", paddingTop: "2px"}}>CBCT</Box>
                                        </div>
                                        <List>                            
                                            <ListItem style={{display: "block", paddingLeft: "2px"}}>
                                                <ListItemText style={{marginBottom: "30px"}}
                                                    primary="Kang kung wong"                                                    
                                                />
                                                <ListItemText style={{marginBottom: "15px"}}
                                                    secondary="ID:"
                                                />
                                                <ListItemText style={{marginBottom: "15px"}}
                                                    secondary="Gender:"
                                                />
                                                <ListItemText style={{marginBottom: "15px"}}
                                                    secondary="Birthday:"
                                                />
                                            </ListItem>                                            
                                        </List>
                                        <Button className="round-button">
                                            <img src={iconBtn} alt="icon"></img>
                                        </Button>
                                    </Grid>                                               
                                )}
                            </Grid>                                
                        )}                                                             
                    </div>                    
                </div>                
            </div>
        </div>
    );
};
