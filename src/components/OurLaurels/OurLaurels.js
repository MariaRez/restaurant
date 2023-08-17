import "./OurLaurels.css";
import Spoon from "../Spoon/Spoon";
import OurLaurelsImage from "../../images/our-laurels.png";
import Award from "../Award/Award";
import firstAward from "../../images/awards/first-award-logo.svg";
import secondAward from "../../images/awards/second-award-logo.svg";
import thirdAward from "../../images/awards/third-award-logo.svg";
import fourthAward from "../../images/awards/fourth-award-logo.svg";

function OurLaurels() {
  return (
    <section className="our-laurels">
      <div className="our-laurels__text">
        <h4 className="small-header main-font text_size_m">Awards & recognition</h4>
        <Spoon />
        <h2 className="medium-header main-font text_size_xl">Our Laurels</h2>
        <ul className="our-laurels__container">
            <Award awardImage={firstAward} awardText="Bib Gourmond" awardDescription="Lorem ipsum dolor sit amet, consectetur." />
            <Award awardImage={secondAward} awardText="Rising Star" awardDescription="Lorem ipsum dolor sit amet, consectetur." />
            <Award awardImage={thirdAward} awardText="AA Hospitality" awardDescription="Lorem ipsum dolor sit amet, consectetur." />
            <Award awardImage={fourthAward} awardText="Outstanding Chef" awardDescription="Lorem ipsum dolor sit amet, consectetur." />
        </ul>
      </div>
      <img
        className="our-laurels__image"
        src={OurLaurelsImage}
        alt="Our Laurels"
      />
    </section>
  );
}

export default OurLaurels;
