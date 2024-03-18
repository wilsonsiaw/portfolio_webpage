import React from 'react';
import "./Hero.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-top">
        <h1>wilsonsiaw</h1>
        <div className="icons">
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
      <div className="hero-center">
        <div className="profile"></div>
        <div className="hero-bottom">
          <div className='hero-content'>
            <h2>
                I'm <span id='name'>Wilson Siaw.</span>
                <br />
                It's a pleasure to meet you!
            </h2>
            <p>
                Based in South Africa, I'm a front-end developer
                who delights in building interactive and user-friendly web apps.
            </p>
          </div>
          <div className="contact-me">
            <h3>CONTACT ME</h3>
            <hr id='contact-line'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


