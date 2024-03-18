import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact-top">
            <h4>Contact</h4>
            <p>
                I would love to hear about your project and any software development
                opportunities you have.
                <br />
                I'm looking forward to discussing how I can help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
            </p>
        </div>

        <form action="">
            <input type="text" 
                placeholder='NAME'
            />
            <br />
            <input type="email" 
                placeholder='EMAIL'
            />
            <br />
            <textarea 
                name="" 
                id="" cols="30" 
                rows="10" 
                placeholder='MESSAGE'>
            </textarea>
            <br />
            <button>SEND MESSAGE</button>
        </form>
    </div>
  )
}

export default Contact
