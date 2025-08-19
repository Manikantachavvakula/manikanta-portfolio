import React from 'react'
import './nav.css'
import { BiHomeHeart } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BiBookBookmark } from 'react-icons/bi'
import { HiDocumentDuplicate } from 'react-icons/hi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    // Changed initial state from '#' to '#home' for better accessibility
    const [activeNav, setActiveNav] = useState('#home')
    
    return (
        <nav>
            <a 
                href="#home" 
                onClick={() => setActiveNav('#home')} 
                className={activeNav === '#home' ? 'active' : ''}
                aria-label="Navigate to Home section"
            >
                <BiHomeHeart />
            </a>
            
            <a 
                href="#about" 
                onClick={() => setActiveNav('#about')} 
                className={activeNav === '#about' ? 'active' : ''}
                aria-label="Navigate to About section"
            >
                <BiUser />
            </a>
            
            <a 
                href="#experience" 
                onClick={() => setActiveNav('#experience')} 
                className={activeNav === '#experience' ? 'active' : ''}
                aria-label="Navigate to Experience section"
            >
                <BiBookBookmark />
            </a>
            
            <a 
                href="#portfolio" 
                onClick={() => setActiveNav('#portfolio')} 
                className={activeNav === '#portfolio' ? 'active' : ''}
                aria-label="Navigate to Portfolio section"
            >
                <HiDocumentDuplicate />
            </a>
            
            <a 
                href="#contact" 
                onClick={() => setActiveNav('#contact')} 
                className={activeNav === '#contact' ? 'active' : ''}
                aria-label="Navigate to Contact section"
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav