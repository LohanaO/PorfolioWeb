import './contact.css';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble }
  from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

/**
 * Renders the Contact component.
 *
 * @return {JSX.Element} The Contact component.
 */
const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In  <span>Touch</span></h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't by Shy !</h3>

          <p className='contact__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante eget mi gravida consectetur sed vitae libero. Nulla ultricies lectus sed dolor eleifend, id aliquam justo rutrum. Nulla facilisi. Fusce tincidunt, sapien nec consectetur placerat, odio velit eleifend
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
            <a href="https://www.facebook.com/lohap/"  className='contact__social-link'><FaFacebookF/></a>

            <a href="https://www.facebook.com/lohap/"  className='contact__social-link'><FaTwitter/></a>

            <a href="https://youtube.com/"  className='contact__social-link'><FaYoutube/></a>

            <a href="https://www.facebook.com/lohap/"  className='contact__social-link'><FaDribbble/></a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='your name'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                placeholder='your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Subject'
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              placeholder='Your Message'
              className='form__control'
            ></textarea>
            </div>
            <button className='button'>
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