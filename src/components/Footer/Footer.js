import './Footer.css';

function Footer() {
  return (
    <footer classNameName='footer'>
      <h4 className='main-font text_size_sm small-description'>Contact Us</h4>
      <img className='big-logo' src='/images/big-logo.svg' alt='Большой логотип' />
      <h4 className='main-font text_size_sm small-description'>Working Hours</h4>
      <ul className='footer-info additional-font text_size_xs description no-bottom'>
        <li className='footer-info-first'>9 W 53rd St, New York, NY 10019, USA</li>
        <li>+1 212-344-1230</li>
        <li>+1 212-555-1230</li>
      </ul>
      <ul className='social-media-links'>
        <li className='additional-font text_size_xs description no-bottom'>
          'The best way to find yourself is to lose yourself in the service of
          others.”
        </li>
        <li>
          <img className='small-img' src='/images/spoon.svg' alt='Ложка' />
        </li>
        <li>
          <ul className='social-media-items'>
            <li className='social-media-item'>
              <img src='/images/fb.svg' alt='Ссылка на наш фэйсбук' />
            </li>
            <li className='social-media-item'>
              <img src='/images/tw.svg' alt='Ссылка на наш твиттер' />
            </li>
            <li className='social-media-item'>
              <img src='/images/inst.svg' alt='Ссылка на наш инстаграм' />
            </li>
          </ul>
        </li>
      </ul>
      <ul className='additional-font text_size_xs description no-bottom footer-info'>
        <li className='footer-hours'>Monday-Friday: 08:00 am-12:00 am</li>
        <li className='footer-hours'>Saturday-Sunday: 07:00 am-11:00 pm</li>
      </ul>
      <span className='footer-copyrigth additional-font text_size_xs description no-bottom'>
        2021 Gerícht. All Rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
