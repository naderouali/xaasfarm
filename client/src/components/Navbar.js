import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { slide as Menu } from 'react-burger-menu'
import "../Navbar.css";

export default function NavbarF({ doLogout }) {


    const [menuActive, setMenuActive] = useState(false)

    const ShowSettings = (e) => {
        e.preventDefault();
    }
    const closeBurger = (e) => {
        console.log("clicked")
    }

    // const classes = useStyles();
    return (

        <>
            <input type="checkbox" checked={menuActive} onChange={(e) => setMenuActive(!menuActive)} id="menu-toggle" />
            <label id="trigger" for="menu-toggle" ></label>
            <label id="burger" for="menu-toggle" ></label>
            <ul id="menu">

                {Ls.getObject('session', { 'isLoggedIn': false }).isLoggedIn ?
                    <>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/" >Home</NavLink></li>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/profile" >Profile</NavLink></li>
                        <li><NavLink onClick={doLogout} to="/login" >Log out</NavLink></li>

                    </>
                    :
                    <>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/" >Home</NavLink></li>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/login" >Login</NavLink></li>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/register" >Register</NavLink></li>

                    </>}
            </ul>
        </>

        // <Navbar className="RegularFont" style={{ backgroundColor: "#820b70" }} expand="lg">
        //     <Navbar.Brand><NavLink to="/"><b>App.Maker</b></NavLink></Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <NavDropdown title="App" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Open</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Save</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Build</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Close</NavDropdown.Item>
        //             </NavDropdown>
        //         </Nav>
        //         <Nav>


        //             {Ls.getObject('session', { 'isLoggedIn': false }).isLoggedIn ?
        //                 <>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} to="/assets" >my assets</NavLink>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} to="/profile" >profil</NavLink>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} onClick={doLogout} to="/login" >log out</NavLink>
        //                 </>
        //                 :
        //                 <>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} to="/" >Home</NavLink>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} to="/login" >login</NavLink>
        //                     <NavLink style={{ color: "white", textDecoration: "none", paddingLeft: '3vh' }} activeStyle={{ color: "white" }} to="/register" >créer compte</NavLink>
        //                 </>}


        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}