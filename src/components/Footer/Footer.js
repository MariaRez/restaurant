import "./Footer.css";
import footerLogo from "../../images/big-logo.svg";
import Spoon from "../Spoon/Spoon"
import SocialMedia from "../SocialMedia/SocialMedia"

function Footer() {
  return (
    <footer className="footer">
      <h4 className="main-font text_size_sm small-description">Contact Us</h4>
      <img className="footer__logo" src={footerLogo} alt="Big Logo" />
      <h4 className="main-font text_size_sm small-description">Working Hours</h4>
      <ul className="footer__info additional-font text_size_xs description no-bottom">
        <li className="footer__info-item footer__info-item_address">
          9 W 53rd St, New York, NY 10019, USA
        </li>
        <li className="footer__info-item">+1 212-344-1230</li>
        <li className="footer__info-item">+1 212-555-1230</li>
      </ul>
      <ul className="footer__social-media-container">
        <li className="additional-font text_size_xs description no-bottom">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </li>
        <li>
          <Spoon />
        </li>
        <li>
         <SocialMedia />
        </li>
      </ul>
      <ul className="footer__info additional-font text_size_xs description no-bottom">
        <li className="footer__info-item">Monday-Friday: 08:00 am-12:00 am</li>
        <li className="footer__info-item">Saturday-Sunday: 07:00 am-11:00 pm</li>
      </ul>
      <span className="footer__copyright additional-font text_size_xs description no-bottom">
        2021 Gerícht. All Rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
