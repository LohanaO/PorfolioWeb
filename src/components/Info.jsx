import  {personalInfo} from '../../src/data.jsx'
import '../pages/about/about.css'

const Info = () => {
  return (
    <>
       {personalInfo.map(({title, description}, index) => {
        return (
            <li className='info__item' key={index}>
                <span className='info__title'>{title}</span>
                <span className='info__description'>{description}</span>
            </li>
        )

       })} 
        
    </>
  )
}

export default Info