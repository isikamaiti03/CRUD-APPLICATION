import React from 'react'
import {AppBar,Toolbar,Typography,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header= styled(AppBar)`
    background: #111111;
`
const Typo=styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    text-decoration:none;
    color:inherit;
`
const Navbar = () => {
  return (
    <div>
      <Header position='static'>
            <Toolbar>
                <Typo to="/">Home</Typo>
                <Typo to="/all">All User</Typo>
                <Typo to="/add">Add User</Typo>
            </Toolbar>
      </Header>
    </div>
  )
}

export default Navbar
