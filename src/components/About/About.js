import "./About.css";
import backgroundWithFirstLetter from "../../images/background-with-first-letter.svg";
import Spoon from "../Spoon/Spoon";
import Button from "../Button/Button";

function About() {
  return (
    <section className="about">
      <img
        className="about__background"
        src={backgroundWithFirstLetter}
        alt="Background"
      />
      <ul className="about__container">
        <li className="about__container-item about__container-item_position_right">
          <h2 className="text_size_xl main-font medium-header">About Us</h2>
          <Spoon classNameSpoon="spoon_reflected" />
          <p className="about__description text_size_xs description additional-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button buttonText="Know More" />
        </li>
        <li className="about__container-item about__container-item_position_left">
          <h2 className="text_size_xl main-font medium-header">Our History</h2>
          <Spoon />
          <p className="about__description text_size_xs description additional-font">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <Button buttonText="Know More" />
        </li>
      </ul>
    </section>
  );
}

export default About;
