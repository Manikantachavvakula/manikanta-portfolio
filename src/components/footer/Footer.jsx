import React from 'react'
import './footer.css'
import { FaLinkedinIn, FaGithubAlt, FaTwitter } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>MANIKANTA</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/manikanta-chavvakula-43b308189/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/Manikantachavvakula" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
                    <FaGithubAlt />
                </a>
                <a href="https://medium.com/@manikantachavvakula508" target="_blank" rel="noreferrer" aria-label="Visit Medium blog">
                    <ImBlogger2 />
                </a>
                <a href="mailto:manikantaa.dev@gmail.com" aria-label="Send email">
                    <HiMail />
                </a>
                <a href="https://twitter.com/manikanta" target="_blank" rel="noreferrer" aria-label="Visit Twitter profile">
                    <FaTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://linkedin.com/in/manikanta-chavvakula" target="_blank" rel="noreferrer">Manikanta Chavvakula</a></b>. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer