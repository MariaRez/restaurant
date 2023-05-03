import './Header.css';

function Header() {
  return (
    <header class="header text_size_xs additional-font" id="top">
    <img class="logo" src="/images/Logo.svg" alt="Логотип" />
    <nav>
      <ul class="menu">
        <li>Home</li>
        <li>Pages</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>Landing</li>
      </ul>
    </nav>
    <div class="header-links">
      <p>Log in / Registration</p>
      <p>Book table</p>
    </div>
  </header>
  );
}

export default Header;
