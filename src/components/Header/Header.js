import "./Header.css";
import Logo from "../Logo/Logo";
import menu from "../../images/menu-logo.svg";
import links from "../../images/links-logo.svg";
import { useState } from "react";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  }

  function toggleLinks () {
    setLinksVisible((prevLinksVisible) => !prevLinksVisible);
  }

  return (
    <header className="header text_size_xs additional-font" id="top">
      <Logo />
      <div className="header__container">
        <img className="header__icons" src={menu} alt="menu" onClick={toggleMenu}/>
        <nav>
          <ul className={`header__menu ${menuVisible ? 'header__menu_visible' : ''}`}>
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>
        </nav>
      </div>
      <div className="header__container"> 
        <img className="header__icons" src={links} alt="links" onClick={toggleLinks}/>
        <div className={`header__links ${linksVisible ? 'header__links_visible' : ''}`}>
          <p>Log in / Registration</p>
          <p>Book table</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
