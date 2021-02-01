import React, { useEffect, useState } from "react";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import axios from "axios";
import Image from '../components/Image';

export default function Profile() {



    const [user, setUser] = useState({});
    const [selectedImage, setSelectedImage] = useState({
        url: "",
        name: "",
        price: "",
        _id: ""
    })
    const [images, setImages] = useState([])


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


    useEffect(() => {

        var session = Ls.getObject("session", { isLoggedIn: false });

        let config = {
            headers: {
                "auth-token": session.token,
            }
        }

        let data = {}

        axios.post("/api/image/read/all", data, config)
            .then(res => {
                console.log(res.data)
                let response = res.data;

                if (response.success) {
                    setImages(response.images)
                }
            })


    }, [])


    return (
        <div style={{ backgroundColor: '#b9b9b9', minHeight: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'center', padding: '5%' }}>


                {images.map(item => (
                    <>
                        {user.ownedImages.includes(item._id) && <Image
                            key={item._id}
                            url={item.url}
                            name={item.name}
                            price={item.price}
                            inProfile={true}
                            owned={user.ownedImages.includes(item._id)}


                        />
                        }
                    </>
                    //     <Image
                    //     key={item._id}
                    //     {...item}
                    //     url={item.url}
                    //     name={item.name}
                    //     price={item.price}

                    //     owned={user.ownedImages.includes(item._id)}

                    // />
                ))}




            </div>
        </div >
    )
}
