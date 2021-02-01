import React, { useState } from "react";
import axios from "axios";
import logo from "../medias/xaasfarm.png";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function RegisterForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [birthday, setBirthday] = useState(new Date());



    const onSubmit = () => {
        if (!verifyEmail(email)) {
            return;
        }
        else {
            const user = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                birthday: selectedDate
            };
            console.log(user);
            axios
                .post("api/user/register", user)
                .then((res) => console.log(res.data))
                .catch((error) => console.log(error.response.request._response));
        }

    }


    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
            e.preventDefault();
        }
    }

    const [selectedDate, setSelectedDate] = useState("01-01-1978");

    const handleDateChange = (date) => {
        var selectedDate = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
        setSelectedDate(selectedDate);
        console.log(selectedDate);
    };

    const verifyEmail = temp => {
        console.log(temp)
        //no special characters allowed only alphabet and numbers with max length 10
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!temp.match(regex)) {
            alert('mail invalid')
            return false;
        }

        return true;
    }


    return (

        <div style={{ backgroundColor: "#b9b9b9" }}>
            <div className="RegularFont" style={{ backgroundColor: '#b9b9b9', minHeight: "100vh", marginLeft: '20%', marginRight: '20%', display: 'flex', flexDirection: 'column', gap: '30px', padding: '6%' }}>
                {/* logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} style={{ display: 'flex', alignItems: 'center', width: '50%', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto' }} />
                </div>

                <div style={{ color: '#212121', fontSize: 30 }}>Join us</div>

                {/* Fields */}
                <TextField id="outlined-basic" reauired label="First name" variant="outlined" value={firstname} onChange={(e) => { setFirstname(e.target.value); }} />
                <TextField id="outlined-basic" reauired label="Last name" variant="outlined" value={lastname} onChange={(e) => { setLastname(e.target.value); }} />

                <TextField id="outlined-basic" reauired label="E-mail" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                <TextField id="outlined-basic" reauired type="password" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value); }} onKeyPress={handleEnter} />
                {/* <TextField id="outlined-basic" reauired label="Birthday" variant="outlined" value={birthday} onChange={(e) => { setBirthday(e.target.value); }} onKeyPress={handleEnter} /> */}

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Birthday"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button onClick={onSubmit} variant="contained" color="primary" style={{ color: 'white', backgroundColor: '#72a54b' }}>
                    Create account
                </Button>

                <div style={{ textAlign: 'center' }}>
                    <NavLink to="/login" style={{ color: 'black', fontSize: 14 }} >Already have an account? Log in here</NavLink>
                </div>

            </div>
        </div>

    );
}
