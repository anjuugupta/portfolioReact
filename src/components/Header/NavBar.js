import React from "react";
import "./navBar.css";

//images import
import logo_light from '../../assets/png/logo-no-background.png'
import logo_dark from '../../assets/png/logo-white.png'
import search_icon_light from  '../../assets/png/search-w.png'
import search_icon_dark from '../../assets/png/search-b.png'
import toggle_light from '../../assets/png/night.png'
import toggle_dark from '../../assets/png/day.png'



const NavBar = ({theme, setTheme}) => {
const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    
        <div className="navbar">
          <img className="logo" src={theme == 'light' ? logo_light : logo_dark} />
       
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
        </div>
        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className="toggle-icon" />
        </div>

  );
};

export default NavBar;
