import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr id='footer-line'/>
        <div className="footer-content">
            <h4>wilsonsiaw</h4>
            <div className='footer-icons'>
                <a 
                    href="https://github.com/wilsonsiaw"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.linkedin.com/in/wilson-siaw/"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://twitter.com/data_wilson"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsTwitterX />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
