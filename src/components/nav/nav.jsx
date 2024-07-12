import React from "react";
import { Link } from "react-router-dom";


import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Nav() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "5%"}}>
                <AppBar position="static" style={{ backgroundColor: "black", borderRadius: '16px' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6" component="div">
                            React Quiz
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ mr: 2 }}>
                                Clyde Ritchie
                            </Typography>
                            <Link to="https://github.com/Clyderitchie" target="_blank" style={{ backgroundColor: "black", color: "white" }}>
                                <IconButton color="inherit" aria-label="GitHub">
                                    <GitHubIcon />
                                </IconButton>
                            </Link>
                            <Link to="https://www.linkedin.com/in/clyde-ritchie-536a12219/" target="_blank" style={{ backgroundColor: "black", color: "white" }}>
                                <IconButton color="inherit" aria-label="LinkedIn">
                                    <LinkedInIcon />
                                </IconButton>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Nav;