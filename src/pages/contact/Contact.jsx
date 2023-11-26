import { useState } from 'react';
import './contact.css';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, 
  FaLinkedin, FaGithub }
  from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Error from '../../components/Error';
import emailjs from '@emailjs/browser';



/**
 * Renders the Contact component.
 *
 * @return {JSX.Element} The Contact component.
 */
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if ([name, email, subject, message].includes("")) {

      setError(true);
      setMessageError("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      setError(true);
      setMessageError("Invalid email");
      return;
    }
    emailjs.send(
      'service_s9oqb4y',
      'formulario_contacto',
      {
        to_email: 'lohaorellano13@gmail.com',
        name: name,
        email: email,
        subject: subject,
        message: message
      },
      'ALxAC6Q8ElCeuIYEp'
    )
      .then(() => {
        console.log('Email sent successfully');
        setIsEmailSent(true);
        setError(false);
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          setIsEmailSent(false);
        }, 1500);

      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });


  }

  return (
    <section className='contact section'>

      <h2 className='section__title'>
        Get In  <span>Touch</span></h2>

      <div className='contact__container container grid'>

        <div className='contact__data'>
          <h3 className='contact__title'>Contact Form !</h3>

          <p className='contact__description'>
            If you need to contact me you can send a message.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />



              <div>
                <span className='info__title'> Mail me</span>
                <h4 className='info__desc'>orellanolohana@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />



              <div>
                <span className='info__title'> Call me</span>
                <h4 className='info__desc'>+393791077529</h4>
              </div>
            </div>

          </div>

          <div className='contact__socials'>
            <a href="https://www.facebook.com/lohap/" className='contact__social-link'><FaFacebookF /></a>

            <a href="https://www.linkedin.com/in/lohana-orellano-81b242246/" className='contact__social-link'><FaLinkedin /></a>

            <a href="https://github.com/LohanaO" className='contact__social-link'><FaGithub /></a>

           
          </div>
        </div>

        <form className='contact__form'>
          {error &&
            <Error mensaje={messageError} />
          }
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='your name'
                className='form__control'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                placeholder='your Email'
                className='form__control'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Subject'
                className='form__control'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              placeholder='Your Message'
              className='form__control'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {isEmailSent && <p className='succes'>Email sent successfully</p>}
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='button'
          >
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact