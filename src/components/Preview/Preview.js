import './Preview.css';

function Preview() {
  return (
    <section className='preview'>
      <div className='rigth-column'>
        <h4 className='small-header main-font text_size_m'>
          Chase the new Flavour
        </h4>
        <img className='small-img' src='/images/spoon.svg' alt='Ложка' />
        <h1 className='preview-header big-header main-font text_size_xxl'>
          The key to Fine dining
        </h1>
        <p className='description additional-font text_size_xs'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className='button text_size_xs main-font'>Explore Menu</button>
      </div>
      <img
        className='preview-img'
        src='/images/main-pic.png'
        alt='Главное изображение'
      />
      <a className='scroll-images scroll-images_to_menu' href='#menu'>
        <img src='/images/Scroll.svg' alt='Скролл к меню' />
      </a>
    </section>
  );
}

export default Preview;
