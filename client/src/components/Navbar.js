import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
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
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/images" >Images</NavLink></li>
                        {/* <li><NavLink onClick={doLogout} to="/login" >Log out</NavLink></li> */}
                        <li><NavLink onClick={(e) => { setMenuActive(!menuActive); doLogout(); }} to="/login" >Log out</NavLink></li>

                    </>
                    :
                    <>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/" >Home</NavLink></li>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/login" >Login</NavLink></li>
                        <li><NavLink onClick={(e) => setMenuActive(!menuActive)} to="/register" >Register</NavLink></li>

                    </>}
            </ul>
        </>
    );
}