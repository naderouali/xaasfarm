import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function Modale({ open, handleCloseAndBuy, handleCancel, selectedImage }) {
    const classes = useStyles();


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleCancel}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper} style={{ borderRadius: 10, outline: 'none' }}>
                    <h2 id="transition-modal-title" style={{ textAlign: 'center' }}>{selectedImage.name}</h2>
                    <h2 id="transition-modal-title" style={{ textAlign: 'center' }}>{selectedImage.price}</h2>
                    <p id="server-modal-description">Buy this image?</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 20, margin: '10%' }}>
                        <Button onClick={handleCancel} variant="contained" color="default" style={{ color: 'black', backgroundColor: '#e9e9e9', width: '100%' }}>Cancel</Button>
                        <Button onClick={handleCloseAndBuy} variant="contained" color="primary" style={{ color: 'white', backgroundColor: '#72a54b', width: '100%' }}>Buy</Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}
