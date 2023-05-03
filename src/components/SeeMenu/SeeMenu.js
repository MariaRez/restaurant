import './SeeMenu.css';

function SeeMenu() {
  return (
    <section className='see-menu' id='menu'>
      <img
        className='small-logo small-logo_see-menu'
        src='/images/small-logo.svg'
        alt='Небольшой логотип'
      />
      <div className='overlay'></div>
      <ul className='see-menu__list main-font medium-header'>
        <li className='see-menu__item text_size_xl'>Bar Menu</li>
        <li className='see-menu__item text_size_xl'>Food Menu</li>
        <li className='see-menu__item text_size_xl'>Desserts Menu</li>
      </ul>
    </section>
  );
}

export default SeeMenu;
