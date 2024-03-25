import React, {useState} from 'react'
import "./Contact.css"

const Contact = () => {
    
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    )

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

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
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                />
                <input type="email"
                    placeholder='EMAIL'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                />
                <textarea 
                    placeholder='MESSAGE'
                    id="" cols="30"
                    rows="10"
                    name='message'
                    onChange={handleChange}
                    value={formData.message}
                />
                    
                <div className="submit-btn">
                    <button>SEND MESSAGE</button>
                </div>
                <span id='submit-line'></span>
            </form>
        </div>
    </div>
  )
}

export default Contact
