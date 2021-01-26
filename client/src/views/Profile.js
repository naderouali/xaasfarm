import React, { useEffect, useState } from "react";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import axios from "axios";

export default function Profile() {

    const [user, setUser] = useState({});



    useEffect(() => {
        const getUserInfo = () => {

            var session = Ls.getObject('session', { 'isLoggedIn': false });

            let config = {
                headers: {
                    "auth-token": session.token,
                }
            }

            axios
                .post("/api/user/profile/", {}, config)
                .then((response) => {
                    // console.log(response)

                    let res = response.data;

                    if (res.success) {
                        setUser(response.data.user);
                    } else {
                        if (res.message === "user-not-found") {
                            console.log("user not found")
                        } else {
                            console.log("another error")
                        }
                    }


                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getUserInfo();
    }, []);




    return (
        <div style={{ position: 'absolute', top: "10vh" }}>
            <div className="emailTab" style={{ backgroundColor: "#2b6dd4", padding: 10, gridColumn: "1/2" }} >name: {user.firstname} {user.lastname}</div>

        </div>
    )
}
