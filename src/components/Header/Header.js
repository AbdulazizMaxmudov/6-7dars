import { useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import './header.css'
export const Header = ({theme, setTheme}) =>{


  return (
    <header className={theme}>
      <div className="container">
      <div className='header-div'>
      <nav>
        <ul>
          <li className='header-list'>
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')}
            to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')} 
            to="/countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
      <select className='search-select '  defaultValue={theme}   onChange={(evt)=> setTheme(evt.target.value)}> 
        <option value="light">light</option> 
        <option value="dark">dark</option> 
        </select> 
      </div>
      </div>






    </header>
  
  )
}