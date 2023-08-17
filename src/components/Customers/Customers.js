import Spoon from "../Spoon/Spoon"
import "./Customers.css";
import Photo1 from "../../images/customers-photo/photo1.png"
import Photo2 from "../../images/customers-photo/photo2.png"
import Photo3 from "../../images/customers-photo/photo3.png"
import Photo4 from "../../images/customers-photo/photo4.png"

function Customers() {
  return (
    <section className="customers">
      <h4 className="small-header main-font text_size_m">Testimony</h4>
      <Spoon />
      <h2 className="customers__header medium-header main-font text_size_xl">
        Happy customers
      </h2>
      <ul className="customers__list">
        <li className="customers__item">
          <img
            className="customers__item-photo"
            src={Photo1}
            alt="Customer"
          />
          <div className="customers__item-container">
            <p className="customers__item-text additional-font text_size_xs italic-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
              iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
              scelerisque scelerisque congue.
            </p>
            <span className="customers__item-name main-font text_size_sm medium-description">
              Wade Warren
            </span>
            <span className="additional-font text_size_xs small-description">
              Sommelier
            </span>
          </div>
        </li>
        <li className="customers__item">
          <img
            className="customers__item-photo"
            src={Photo2}
            alt="Customer"
          />
          <div className="customers__item-container">
            <p className="customers__item-text additional-font text_size_xs italic-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
              iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
              scelerisque scelerisque congue.
            </p>
            <span className="customers__item-name main-font text_size_sm medium-description">
              Jane Cooper
            </span>
            <span className="additional-font text_size_xs small-description">
              Chef
            </span>
          </div>
        </li>
        <li className="customers__item">
          <img
            className="customers__item-photo"
            src={Photo3}
            alt="Customer"
          />
          <div className="customers__item-container">
            <p className="customers__item-text additional-font text_size_xs italic-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
              iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
              scelerisque scelerisque congue.
            </p>
            <span className="customers__item-name main-font text_size_sm medium-description">
              Robert Fox
            </span>
            <span className="additional-font text_size_xs small-description">
              Chef
            </span>
          </div>
        </li>
        <li className="customers__item">
          <img
            className="customers__item-photo"
            src={Photo4}
            alt="Customer"
          />
          <div className="customers__item-container">
            <p className="customers__item-text additional-font text_size_xs italic-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit
              iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
              scelerisque scelerisque congue.
            </p>
            <span className="customers__item-name main-font text_size_sm medium-description">
              Brooklyn Simmons
            </span>
            <span className="additional-font text_size_xs small-description">
              Caterer
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Customers;
