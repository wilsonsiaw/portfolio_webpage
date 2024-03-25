import React, {useState} from 'react'
import "./Contact.css"
import emailjs from "emailjs-com"

const Contact = () => {
    
    const [formData, setFormData] = useState(
        {
            user_name: "",
            user_email: "",
            message: ""
        }
    )

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_EMAIL_USER_ID
        )
        .then((result) => {
            alert("Email sent successfully!");

            setFormData({
                user_name: "",
                user_email: "",
                message: ""
            });
        })
        .catch(error => {
            alert("Error sending email:", error);
            alert("Send an email directly to: wilsonsiawse@gmail.com")
        })
    }

  return (
    <div className='contact-container' id='contact'>
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

            <form action="" className='contact-form' onSubmit={sendEmail}>
                <input type="text"
                    placeholder='NAME'
                    name='user_name'
                    onChange={handleChange}
                    value={formData.name}
                />
                <input type="email"
                    placeholder='EMAIL'
                    name='user_email'
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
