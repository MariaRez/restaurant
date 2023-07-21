import "./Header.css";
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header text_size_xs additional-font" id="top">
      <Logo />
      <nav>
        <ul className="header__menu">
          <li>Home</li>
          <li>Pages</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Landing</li>
        </ul>
      </nav>
      <div className="header__links">
        <p>Log in / Registration</p>
        <p>Book table</p>
      </div>
    </header>
  );
}

export default Header;
