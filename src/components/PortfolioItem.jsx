import Close from '../../src/assets/close.svg';
import { useState } from 'react';
const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      }
    return (
        <div className="portfolio__item">
            <img className="portfolio__img" src={img} alt="imagen portfolio" />

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

         {modal && (
            <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                    <img src={Close} alt='' className='modal__close' onClick={toggleModal}/>


                    <h3 className='modal__title'>{title}</h3>

                    <ul className='modal__list grid'>
                        {details.map(({icon, title, desc}, index)=>{
                            return (
                                <li key={index} className='modal__item'>
                                    <span className='modal__icon'>{icon}</span>
                                    <div>
                                    <span className='item__title'>{title}</span>
                                    <span className='item__details'>{desc}</span>
                                    </div>
                                   
                                </li>
                            )
                        })}
                    </ul>

                    <img src={img} alt='imgen modal' className='modal__img'/>
                </div>
            </div>
         )}
        </div>
    )
}

export default PortfolioItem