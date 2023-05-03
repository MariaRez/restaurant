import './About.css';

function About() {
  return (
    <section className='about'>
      <img className='logo-back' src='/images/G.svg' alt='Первая буква логотипа' />
      <ul className='about-container'>
        <li className='about-item about-item-right'>
          <h2 className='text_size_xl main-font medium-header'>About Us</h2>
          <img
            className='small-img small-img_rigth'
            src='/images/spoon.svg'
            alt='Ложка'
          />
          <p className='text_size_xs description about-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className='button text_size_xs main-font'>Know More</button>
        </li>
        <li className='about-item about-item-rightn'>
          <h2 className='text_size_xl main-font medium-header'>Our History</h2>
          <img className='small-img' src='/images/spoon.svg' alt='Ложка' />
          <p className='text_size_xs description about-description'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className='button text_size_xs main-font'>Know More</button>
        </li>
      </ul>
    </section>
  );
}

export default About;
