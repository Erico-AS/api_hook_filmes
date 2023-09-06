import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"2em"}}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Box sx={{ display: 'flex', margin: 1, marginLeft: 1, justifyContent: 'space-between' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            <a><Link to="/">Projeto Filmes</Link></a>
          </Typography>
        </Toolbar>
          <Button variant="text"><Link to="/melo">Filmes Melo</Link></Button>
          <Button variant="text"><Link to="/erico">Filmes Erico</Link></Button>
        </Box>
      </AppBar>
    </Box>
    
  );
}