import React, { useState } from "react";
import axios from "axios";


export default function RegisterForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState(new Date());



    const onSubmit = () => {
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            birthday: birthday
        };
        console.log(user);
        axios
            .post("/api/users/register", user)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error.response.request._response));
        //window.location = "/";
    }

    const style = {

    }


    return (
        <div>
            <div style={{ backgroundColor: "#92c1e0", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "#214d72", padding: "5vh 20vh 10vh 20vh" }}>

                    <h1 style={{ color: "#cadfec" }}>Créer un compte</h1>

                    <div>
                        <input
                            type="input"
                            className="form__field"
                            name="firstname"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => { setFirstname(e.target.value); }}
                            required
                        />
                        <label htmlFor="firstname" className="form__label">First name</label>
                    </div>

                    <div>
                        <input
                            type="input"
                            className="form__field"
                            name="lastname"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => { setLastname(e.target.value); }}
                            required
                        />
                        <label htmlFor="lastname" className="form__label">Last name</label>
                    </div>

                    <div>
                        <input
                            type="input"
                            className="form__field"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            required
                        />
                        <label htmlFor="email" className="form__label">Email</label>
                    </div>

                    <div>
                        <input
                            type="input"
                            className="form__field"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                            required
                        />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>

                    <div>
                        <input
                            type="date"
                            className="form__field"
                            name="birthday"
                            placeholder="Birthday"
                            value={birthday}
                            onChange={(e) => { setBirthday(e.target.value); }}
                            required
                        />
                        <label htmlFor="birthday" className="form__label">Birthday</label>
                    </div>

                    <button onClick={onSubmit}>
                        Create account
          </button>

                </div>
            </div>
        </div>
    );
}
