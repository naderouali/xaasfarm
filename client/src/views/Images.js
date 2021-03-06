import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import axios from "axios";
import Modale from "../components/Modale";
import Image from '../components/Image';
import { useHistory } from "react-router-dom";
import { reactLocalStorage as Ls } from 'reactjs-localstorage';

export default function Images() {


    const [images, setImages] = useState([])

    const [selectedImage, setSelectedImage] = useState({
        url: "",
        name: "",
        price: "",
        _id: ""
    })

    const [open, setOpen] = useState(false);


    const [user, setUser] = useState({});

    var history = useHistory();

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

    const onBuy = () => {

        var session = Ls.getObject("session", { isLoggedIn: false });

        let config = {
            headers: {
                "auth-token": session.token,
            }
        }

        console.log(selectedImage)

        let data = {
            imageId: selectedImage._id
        }

        axios.post("/api/user/image/buy", data, config)
            .then(res => {
                console.log(res.data)

                history.go(0);

            })

    }



    const handleOpen = (image) => {
        setSelectedImage(image)
        setOpen(true);
    };

    const handleCloseAndBuy = () => {
        setOpen(false);
        onBuy();
    };
    const handleCancel = () => {
        setOpen(false);

    };


    return (
        <div style={{ backgroundColor: '#b9b9b9', minHeight: '100vh' }}>
            <div style={{ fontSize: 40, textAlign: 'center', paddingTop: 15, fontWeight: 'bold' }}>Hello {user.firstname}</div>
            <div style={{ fontSize: 20, textAlign: 'center', paddingTop: 15 }}>You can start purchasing images from here,</div>
            <div style={{ fontSize: 20, textAlign: 'center' }}>and you will find them on your profile page</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'center', padding: '5%' }}>


                {images.sort((a, b) => {

                    if (user.ownedImages.includes(a._id)) {
                        return -1
                    } else if (user.ownedImages.includes(b._id)) {
                        return 1
                    } else {
                        return 0
                    }

                }).map(item => (
                    <Image
                        handleOpen={handleOpen}
                        key={item._id}
                        {...item}
                        inProfile={false}
                        owned={user.ownedImages.includes(item._id)}

                    />
                ))}


                <Modale open={open} handleCloseAndBuy={handleCloseAndBuy} handleCancel={handleCancel} selectedImage={selectedImage} />



            </div>
        </div >
    )
}
