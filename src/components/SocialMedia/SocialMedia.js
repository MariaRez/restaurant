import "./SocialMedia.css";
import Facebook from "../../images/social-media/facebook-logo.svg"
import Twitter from "../../images/social-media/twitter-logo.svg"
import Instagram from "../../images/social-media/instagram-logo.svg"

function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="social-media__item">
        <img src={Facebook} alt="Our Facebook" />
      </li>
      <li className="social-media__item">
        <img src={Twitter} alt="Our Twitter" />
      </li>
      <li className="social-media__item">
        <img
          src={Instagram}
          alt="Our Instagram"
        />
      </li>
    </ul>
  );
}

export default SocialMedia;
