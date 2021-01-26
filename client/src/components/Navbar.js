import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';


export default function NavbarF({ doLogout }) {

    return (

        <div>
            <div>xaasfarm</div>
            <div>home</div>
        </div>


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