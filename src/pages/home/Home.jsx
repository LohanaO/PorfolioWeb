
import Profile from '../../assets/profile.jpg'
import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} className="home__img" alt="perfil"/>

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'><span>I'm Lohana Orellano.</span>  Web Developer</h1>

          <p className='home__description'>I am a passionate self-taught systems analyst and web developer with a strong foundation in crafting technological solutions. My focus is on problem-solving and the continuous pursuit of effective ways to enhance processes and user experiences.</p>
          <Link to={'/about'} className='button'>More About Me <span className='button__icon'><FaArrowRight/></span></Link>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home