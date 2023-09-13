import "./Header.css";
import Logo from "../Logo/Logo";
import menu from "../../images/menu-logo.svg";
import links from "../../images/links-logo.svg";

function Header() {
  function showMenu () {
    console.log("открыли меню")
  }

  function showLinks () {
    console.log("открыли ссылки")
  }

  return (
    <header className="header text_size_xs additional-font" id="top">
      <Logo />
      <div>
        <img className="header__icons" src={menu} alt="menu" onClick={showMenu}/>
        <nav>
          <ul className="header__menu">
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>
        </nav>
      </div>
      <div>
        <img className="header__icons" src={links} alt="links" onClick={showLinks}/>
        <div className="header__links">
          <p>Log in / Registration</p>
          <p>Book table</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
