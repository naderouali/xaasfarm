import React from 'react'
import earth from "../medias/5g/tab_home_drawable_tint_1.png"
import home from "../medias/5g/tab_home_drawable_tint_2.png"
import speed from "../medias/5g/tab_home_drawable_tint_3.png"
import heart from "../medias/5g/tab_home_drawable_tint_4.png"
import person from "../medias/5g/tab_home_drawable_tint_5.png"
import splash from "../medias/5g/bg_splashscreen.png"
import logo from "../medias/5g/logo.png"


export default function MyIcons({ onDragStart }) {
    return (
        <div >
            <img
                alt="facebook"
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                height="50"
                draggable
                onDragStart={onDragStart}
            />
            <img
                alt="music"
                src={home}
                height="50"
                draggable
                onDragStart={onDragStart}
            />

            <img
                alt="3 lines"
                src={speed}
                height="50"
                draggable
                onDragStart={onDragStart}
            />


            <img
                alt="apple"
                src={heart}
                height="50"
                draggable
                onDragStart={onDragStart}
            />

            <img
                alt="apple"
                src={person}
                height="50"
                draggable
                onDragStart={onDragStart}
            />

            <img
                alt="apple"
                src={logo}
                height="50"
                draggable
                onDragStart={onDragStart}
            />
        </div>
    )
}
