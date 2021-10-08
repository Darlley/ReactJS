import React, { useState } from 'react'
import './style.css'

const TopBar = () => {

    const [value, setValue] = useState('Menu')
    let newClass = true;

    function handleClick(){
        if(value === 'Menu'){
            newClass = false;
            setValue('Open menu')
        } else {
            setValue('Menu')
            newClass = true;
        }
    }

    return (
        <div className="top-bar">
            <h1 className={newClass && 'open-menu'}>{value}</h1>
            <a href="#" onClick={handleClick}>Abrir</a>
        </div>
    )
}

export default TopBar