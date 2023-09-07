import "./Blogs.css";
import Spoon from "../Spoon/Spoon";
import SmallLogo from "../SmallLogo/SmallLogo";
import Button from "../Button/Button";
import Article from "../Article/Article";
import articleImage1 from "../../images/blogs/blog1.png";
import articleImage2 from "../../images/blogs/blog2.png";
import articleImage3 from "../../images/blogs/blog3.png";

function Blogs() {
  return (
    <section className="blogs">
      <h4 className="small-header main-font text_size_m">Blogs</h4>
      <Spoon />
      <h2 className="blogs__header medium-header main-font text_size_xl">
        Gerícht updates
      </h2>
      <ul className="blogs__container">
        <Article
          articleImage={articleImage1}
          articleTitle="tips for prepping and caring for your grill"
          articleDate="16 Apr 2021"
          articleAuthor="Annalisa L"
          articleDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
        />
        <Article
          articleImage={articleImage2}
          articleTitle="summer cocktails and mocktails"
          articleDate="23 May 2021"
          articleAuthor="John Micheal"
          articleDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
        />
        <Article
          articleImage={articleImage3}
          articleTitle="easy cooking for college students"
          articleDate="06 Aug 2021"
          articleAuthor="Fred W"
          articleDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
        />
      </ul>
      <Button buttonText="View More" />
      <SmallLogo classNameSmallLogo="small-logo_place_blogs" />
    </section>
  );
}

export default Blogs;
