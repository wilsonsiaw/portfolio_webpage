import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact">
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

            <form action="" className='contact-form'>
                <input type="text"
                    placeholder='NAME'
                />
                <input type="email"
                    placeholder='EMAIL'
                />
                <textarea
                    name=""
                    id="" cols="30"
                    rows="10"
                    placeholder='MESSAGE'>
                </textarea>
                <div className="submit-btn">
                    <button>SEND MESSAGE</button>
                </div>
                <hr id='submit-line'/>
            </form>
        </div>
    </div>
  )
}

export default Contact
