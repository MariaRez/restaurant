import "./DishPhoto.css";
import dishOverlay from "../../images/overlay-instagram.svg";

function DishPhoto({ dishImage, dishAlt }) {
  return (
    <li className="dish-photo">
      <img className="dish-photo__image" src={dishImage} alt={dishAlt} />
      <div className="dish-photo__overlay">
        <img
          className="dish-photo__overlay-image"
          src={dishOverlay}
          alt="To our Instagram"
        />
      </div>
    </li>
  );
}

export default DishPhoto;
