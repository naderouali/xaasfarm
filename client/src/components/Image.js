import React from 'react'
import Button from '@material-ui/core/Button';

export default function Image({ handleOpen, url, name, price, _id, owned, inProfile }) {
    return (
        <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: 10, overflow: 'hidden', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <img
                src={url}
                width="300"
                style={{ padding: 4, filter: owned ? 'blur(0px)' : 'blur(4px)' }}
            />
            {/* photo details */}
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <div>Name : {name}</div>
                <div>Price : {price} USD</div>
            </div>
            {/* buy button */}
            {
                !inProfile && <Button
                    onClick={() => { handleOpen({ url, name, price, _id }); }}
                    disabled={owned}
                    variant="contained"
                    color="primary"
                    style={{ color: 'white', backgroundColor: '#72a54b', width: '100%', opacity: owned ? 0.7 : 1 }}>
                    {owned ? "Owned" : "Buy"}
                </Button>

            }
        </div>
    )
}
