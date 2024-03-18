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
                    className='github'
                    onMouseOver={({target}) => target.style.color="#c54c82"}
                    onMouseOut={({target}) => target.style.color="white"}
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.linkedin.com/in/wilson-siaw/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='linkedin'
                    onMouseOver={({target}) => target.style.color="#c54c82"}
                    onMouseOut={({target}) => target.style.color="white"}
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://twitter.com/data_wilson"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='twitter'
                    onMouseOver={({target}) => target.style.color="#c54c82"}
                    onMouseOut={({target}) => target.style.color="white"}
                >
                    <BsTwitterX />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
