import "./Preview.css";
import Spoon from "../Spoon/Spoon";
import previewImage from "../../images/preview.png";
import Button from "../Button/Button";
import Scroll from "../Scroll/Scroll";
import scrollLogo from "../../images/scroll-logo.svg";

function Preview() {
  return (
    <section className="preview">
      <div className="preview__container">
        <h4 className="small-header main-font text_size_m">
          Chase the new Flavour
        </h4>
        <Spoon />
        <h1 className="preview__header big-header main-font text_size_xxl">
          The key to Fine dining
        </h1>
        <p className="description additional-font text_size_xs">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <Button buttonText="Explore Menu" />
      </div>
      <img className="preview__image" src={previewImage} alt="Some our dish" />
      <Scroll
        scrollImage={scrollLogo}
        altScroll="Scroll to menu"
        hrefScroll="#menu"
        classNameScroll="scroll-images_to_menu"
      />
    </section>
  );
}

export default Preview;
