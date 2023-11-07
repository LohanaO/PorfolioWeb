

const ThemeItem = ({color, img, changeColor}) => {
  return (
    <img src={img}
     alt="theme image" 
     className="theme__img" 
     onClick={() => changeColor(color)}/>
  )
}

export default ThemeItem