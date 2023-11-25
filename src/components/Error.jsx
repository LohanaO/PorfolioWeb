import './error.css'

const Error = ({mensaje}) => {
  return (
    <div className="alert">
    <p className='error'>{mensaje}</p>
    </div>
  )
}

export default Error