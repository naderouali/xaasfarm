import React from 'react'
import Button from '@material-ui/core/Button';

export default function Image({ handleOpen, url, name, price, _id, owned }) {
    return (
        <div style={{ opacity: owned ? 0.7 : 1, backgroundColor: 'white', border: '1px solid black', borderRadius: 10, overflow: 'hidden', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <img
                src={url}
                width="300"
                style={{ padding: 4 }}
            />
            {/* photo details */}
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <div>Name : {name}</div>
                <div>Price : {price} USD</div>
            </div>
            {/* buy button */}
            <div style={{}}>
                <Button onClick={() => { handleOpen({ url, name, price, _id }); }} disabled={owned} variant="contained" color="primary" style={{ color: 'white', backgroundColor: '#72a54b', width: '100%' }}>{owned ? "Owned" : "Buy"}</Button>
            </div>
        </div>
    )
}
