import Button from "../Button/Button";
import DishPhoto from "../DishPhoto/DishPhoto";
import Spoon from "../Spoon/Spoon";
import Ramen from "../../images/dish-photo/ramen.png";
import Cockail from "../../images/dish-photo/cockail.jpeg"
import Eggs from "../../images/dish-photo/eggs.png"
import "./PhotoGallery.css";

function PhotoGallery() {
  return (
    <section className="photo-gallery">
  <div className="photo-gallery__text">
    <h4 className="small-header main-font text_size_m">Instagram</h4>
    <Spoon />
    <h2 className="medium-header main-font text_size_xl">Photo Gallery</h2>
    <p className="description additional-font text_size_xs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
      ipsum turpis elit elit scelerisque egestas mu.
    </p>
    <Button buttonText="View More"/>
  </div>
  <ul className="photo-gallery__images">
    <DishPhoto dishImage={Ramen} dishAlt="Ramen from our instagram"/>
    <DishPhoto dishImage={Cockail} dishAlt="Cockail from our instagram"/>
    <DishPhoto dishImage={Eggs} dishAlt="Eggs from our instagram"/>
    <DishPhoto dishImage={Ramen} dishAlt="Ramen from our instagram"/>
  </ul>
</section>
  );
}

export default PhotoGallery;
