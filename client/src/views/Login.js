import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import logo from "../medias/xaasfarm.png";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var history = useHistory();

    const onSubmit = () => {
        if (!email) {
            alert('Fill up E-mail');
            return;
        }

        if (!password) {
            alert('Fill up Password');
            return;
        }



        const user = {
            email: email,
            password: password,
        };
        axios
            .post("/api/user/login", user)
            .then((res) => {
                console.log(res.data)

                if (res.data.success) {

                    Ls.setObject("session", { token: res.data.token, isLoggedIn: true });
                    history.push("/profile")

                } else if (res.data.message === "user-not-found") {
                    alert("Wrong e-mail or password");
                    setEmail("")
                    setPassword("")
                }


            })



    }


    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
            e.preventDefault();
        }
    }

    return (

        <div style={{ backgroundColor: "#b9b9b9" }}>
            <div className="RegularFont" style={{ backgroundColor: '#b9b9b9', minHeight: "100vh", marginLeft: '20%', marginRight: '20%', display: 'flex', flexDirection: 'column', gap: '30px', padding: '6%' }}>
                {/* logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} style={{ display: 'flex', alignItems: 'center', width: '50%', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }} />
                </div>
                <div style={{ color: '#212121', fontSize: 30 }}>Log in</div>
                {/* fields */}
                <TextField id="outlined-basic" reauired label="E-mail" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <TextField id="outlined-basic" reauired type="password" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value); }} onKeyPress={handleEnter} />
                <Button onClick={onSubmit} variant="contained" color="primary" style={{ color: 'white', backgroundColor: '#72a54b' }}>
                    Log in
                </Button>
                <div style={{ textAlign: 'center' }}>
                    <NavLink to="/register" style={{ color: 'black', fontSize: 14 }} >Don't have an account? Create one now</NavLink>
                </div>
            </div>
        </div >

    );
}
