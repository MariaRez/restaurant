import "./Special.css";
import Spoon from "../Spoon/Spoon";
import Position from "../Position/Position";
import special from "../../images/special.png";
import Button from "../Button/Button";

function Special() {
  return (
    <section className="special">
      <h4 className="small-header main-font text_size_m">
        Menu That Fits You Palatte
      </h4>
      <Spoon />
      <h2 className="special__header medium-header main-font text_size_xl">
        Today&#39;s Special
      </h2>
      <div className="special__items">
        <div className="special__item">
          <h3 className="special__item-header text_size_l large-header main-font">
            Wine & Beer
          </h3>
          <ul>
            <li>
              <Position
                positionHeader="Chapel Hill Shiraz"
                positionPrice="$56"
                positionDescription="AU | Bottle"
              />
            </li>
            <li>
              <Position
                positionHeader="Catena Malbec"
                positionPrice="$59"
                positionDescription="AU | Bottle"
              />
            </li>
            <li>
              <Position
                positionHeader="La Vieille Rosé"
                positionPrice="$44"
                positionDescription="FR | 750 ml"
              />
            </li>
            <li>
              <Position
                positionHeader="Rhino Pale Ale"
                positionPrice="$31"
                positionDescription="CA | 750 ml"
              />
            </li>
            <li>
              <Position
                positionHeader="Irish Guinness"
                positionPrice="$26"
                positionDescription="IE | 750 ml"
              />
            </li>
          </ul>
        </div>
        <img src={special} alt="Special cockails" />
        <div className="special__item">
          <h3 className="special__item-header text_size_l large-header main-font">
            Cocktails
          </h3>
          <ul>
            <li>
              <Position
                positionHeader="Aperol Spritz"
                positionPrice="$20"
                positionDescription="Aperol | Villa Marchesi prosecco | soda | 30ml"
              />
            </li>
            <li>
              <Position
                positionHeader="Dark 'N' Stormy"
                positionPrice="$16"
                positionDescription="Dark rum | Ginger beer | Slice of lime."
              />
            </li>
            <li>
              <Position
                positionHeader="Daiquiri"
                positionPrice="$10"
                positionDescription="Rum | Citrus juice | Sugar"
              />
            </li>
            <li>
              <Position
                positionHeader="Old Fashioned"
                positionPrice="$31"
                positionDescription="Bourbon | Brown sugar | Angostura Bitters"
              />
            </li>
            <li>
              <Position
                positionHeader="Negroni"
                positionPrice="$26"
                positionDescription="Gin | Sweet Vermouth | Campari | Orange garnish"
              />
            </li>
          </ul>
        </div>
      </div>
      <Button buttonText="View More" />
    </section>
  );
}

export default Special;
