import SmallLogo from "../SmallLogo/SmallLogo";
import Spoon from "../Spoon/Spoon"
import AboutChefImage from "../../images/about-chef.png";
import ChefSing from "../../images/shef-sing.svg"
import "./AboutChef.css";

function AboutChef() {
  return (
    <section className="about-chef">
      <SmallLogo classNameSmallLogo="small-logo_place_about-chef" />
      <img
        className="about-chef__image"
        src={AboutChefImage}
        alt="Our restaurant chef"
      />
      <div className="about-chef__container">
        <h4 className="small-header main-font text_size_m">Chef&#39;s Word</h4>
        <Spoon />
        <h2 className="big-header main-font text_size_xl">What we believe in</h2>
        <p className="about-chef__text italic-description additional-font text_size_xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <span className="about-chef__name main-font text_size_sm medium-header">
          Kevin Luo
        </span>
        <span className="about-chef__post additional-font text_size_xs description">
          Chef & Founder
        </span>
        <img
          className="about-chef__signature"
          src={ChefSing}
          alt="Chef`s sing"
        />
      </div>
    </section>
  );
}

export default AboutChef;
