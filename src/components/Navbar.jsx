import {links} from '../data';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {links.map(({name, icon, path}, index ) =>{
            return (
              <li key={index} className="nav__item">
              <NavLink className={({isActive}) => isActive ? 'nav__link active-nav' : 'nav__link'} to={path} onClick={() => setShowMenu(!showMenu)}>
              {icon}
              <h3 className="nav__name">{name}</h3>
              </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default NavBar