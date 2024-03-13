import React from 'react';
import "./Hero.css"
import profile from "/assets/profile_pic3.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-top">
        <h1>wilsonsiaw</h1>
        <div className="icons">
          <FaGithub />
          <FaLinkedin />
          <BsTwitterX />
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


