import SmallLogo from "../SmallLogo/SmallLogo";
import Spoon from "../Spoon/Spoon"
import Scroll from "../Scroll/Scroll";
import scrollTop from "../../images/scroll-logo-top.svg"
import Form from "../Form/Form"
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <SmallLogo classNameSmallLogo="small-logo_place_newsletter" />
      <h4 className="small-header main-font text_size_m">Newsletter</h4>
      <Spoon />
      <h2 className="medium-header main-font text_size_xl">
        Subscribe to Our Newsletter
      </h2>
      <span className="newsletter__text additional-font text_size_xs large-header">
        And never miss latest Updates!
      </span>
      <Form classNameForm="form_direction_row" isNewsletter={true}/>
      <Scroll scrollImage={scrollTop} altScroll="Scroll to top" hrefScroll="#top" classNameScroll="scroll-images_to_top" />
    </section>
  );
}

export default Newsletter;
