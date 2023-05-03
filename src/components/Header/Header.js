import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className='header text_size_xs additional-font' id='top'>
    <img className='logo' src='../images/Logo.svg' alt='Логотип' />
    <Navigation />
    <div className='header-links additional-font text_size_xs large-header'>
      <p>Log in / Registration</p>
      <p>Book table</p>
    </div>
  </header>
  );
}

export default Header;
