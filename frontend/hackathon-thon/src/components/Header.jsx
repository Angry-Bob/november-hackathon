import React from 'react'
import '../srh.css'
import GA from '../assets/GA.png';

export default function Header () {
    return (
        <header> 
            <div className='rightBox'><img src={GA} className="headerLogo45" alt="" /></div>
            <h1 className='sage'>s<span className='agBackground'>AG</span>e</h1>
        </header>
    )
}