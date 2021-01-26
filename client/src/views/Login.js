import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var history = useHistory();

    const onSubmit = () => {
        const user = {
            email: email,
            password: password,
        };
        axios
            .post("/api/user/login", user)
            .then((res) => {
                console.log(res.data)

                Ls.setObject("session", { token: res.data, isLoggedIn: true });

                history.push("/profile")
            })
        // window.location = "/users/profile";

    }

    const style = {
        container: {

        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
            e.preventDefault();
        }
    }

    return (

        <div style={{ backgroundColor: "#2b2b2b" }}>

            <div className="RegularFont" style={{ backgroundColor: '#2b2b2b', minHeight: "100vh", marginLeft: '20%', marginRight: '20%', display: 'flex', flexDirection: 'column', gap: '30px', padding: '6%' }}>
                <h2 style={{ color: '#f6fdfe' }}>Connectez-vous</h2>
                <h4 style={{ color: '#f6fdfe', marginBottom: -10 }}>Saisissez vos identifiants</h4>
                <input
                    name="email"
                    type="text"
                    placeholder="Nom d'utilisateur ou E-mail*"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                    style={{ borderRadius: 20 }}
                    className='form-control'
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe*"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                    onKeyPress={handleEnter}
                    style={{ borderRadius: 20 }}
                    className='form-control'
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>
                        <input type="checkbox" id="stay" name="stay" className="check" />
                        <label for="stay" style={{ cursor: 'pointer', color: '#f6fdfe' }}>Restez connecté</label>
                    </div>
                    <button className="violetButton" onClick={onSubmit} >Connecter</button>
                </div>
                <div style={{ color: 'white', fontSize: 14 }}>* Obligatoire</div>
                <div style={{ color: 'white', position: 'absolute', top: 0, right: 0 }}>Mot de passe oublié</div>
                <div style={{ color: 'white' }}>Créer un compte</div>
            </div>

        </div>

    );
}
