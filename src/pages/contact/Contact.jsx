// import React from 'react'


// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube
// } from 'react-icons/fa'

// import { FiSend } from 'react-icons/fi'
// import './Contact.Css'

// function Contact() {
//   return (
//     <section className="contact section">
//        <h2 className="section__title">Get In <span>Touch</span></h2>


//        <div className="contact__container container grid">
//         <div className="contact__data">
//           <h3 className="contact__title">Reach out to me!</h3>

//           <p className="contact__description">
//             Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
//           </p>

//           <div className="contact__info">
//              <div className="info__item">
//                <FaEnvelopeOpen className="info__icon" />
                
//                 <div>
//                 <span className="info__title">Mail me</span>
//                 <h4 className="info__desc">bisigoodluck@outlook.com</h4>
//                 </div>
//              </div>

//              <div className="info__item">
//                <FaPhoneSquareAlt className="info__icon" />
                
//                 <div>
//                 <span className="info__title">Call me</span>
//                 <h4 className="info__desc">+2347036594624</h4>
//                 </div>
//              </div>
//           </div>

//           <div className="contact__socials">
//             <a href="https://www.facebook.com/adebisi.goodluck" className="contact__social-link">
//               <FaFacebookF />
//             </a>

//             <a href="https://x.com/@bissysoulja" className="contact__social-link">
//               <FaTwitter />
//             </a>

//             <a href="https://www.linkedin.com/in/adebisi-bobby-goodluck-79247ba" className="contact__social-link">
//               <FaLinkedin />
//             </a>

//             <a href="https://www.instagram.com/mr_a.b.g" className="contact__social-link">
//               <FaInstagram />
//             </a>

//             <a href="https://youtube.com/@bobbygoodluck3287?si=jafeaa2gjabY3zyA" className="contact__social-link">
//               <FaYoutube />
//             </a>

//           </div>
//         </div>

//         <form className="contact__form">

//           <div className="form__input-group">
//             <div className="form__input-div">
//                <input type="text" placeholder='Your Name' className="form__control" />
//             </div>

//             <div className="form__input-div">
//                <input type="email" placeholder='Your Email' className="form__control" />
//             </div>

//             <div className="form__input-div">
//                <input type="text" placeholder='Your Subject' className="form__control" />
//             </div>
//           </div>
//           <div className="form__input-div">
//                <textarea placeholder='Your Message' className="form__control textarea"></textarea>
//             </div>
//             <button className='button'>
//               Send Message
//               <span className="button__icon contact__button-icon">
//                 <FiSend />
//               </span>
//             </button>
//         </form>
//        </div>
//     </section>
//   )
// }

// export default Contact


import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
    Date: '', 
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwKXSgez1Fi1521FEAXwe5GxexLAW5C-SEP2zykscCku8HhMGehmrGbCncMvwdrdRzF/exec';

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; 
    setFormData((prevData) => ({
      ...prevData,
      Date: today,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setMessage('Message sent successfully');
        setFormData({
          Name: '',
          Email: '',
          Subject: '',
          Message: '',
          Date: new Date().toISOString().split('T')[0], 
        });
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Reach out to me!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">bisigoodluck@outlook.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+2347036594624</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/adebisi.goodluck" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://x.com/@bissysoulja" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/adebisi-bobby-goodluck-79247ba" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mr_a.b.g" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@bobbygoodluck3287?si=jafeaa2gjabY3zyA" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Your Message"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>

          {message && <span id="msg">{message}</span>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
