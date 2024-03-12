import React from 'react';
import profile2 from "../../../public/assets/profile_pic2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <h1>wilsonsiaw</h1>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
        <BsTwitterX />
      </div>
      <div className="profile">
        <img src={profile2} alt="" width={180}/>
      </div>
      <div className='hero-content'>
        <h2>
            I'm <span>Wilson Siaw</span>
            <br />
            It's a pleasure to meet you!
        </h2>
        <p>
            Based in South Africa, I'm a front-end developer
            who delights in building interactive and scalable web apps.
        </p>
      </div>
      <div className="contact-me">
        <h3>CONTACT ME</h3>
      </div>
    </div>
  )
}

export default Hero


