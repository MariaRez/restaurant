import "./Special.css";

function Special() {
    // Сделать отдельный элемент на позицию
  return (
    <section className="special">
      <h4 className="small-header main-font text_size_m">
        Menu That Fits You Palatte
      </h4>
      <img className="small-img" src="/images/spoon.svg" alt="Ложка" />
      <h2 className="special-header medium-header main-font text_size_xl">
        Today&#39;s Special
      </h2>
      <div className="specials">
        <div className="specials-description">
          <h3 className="specials-description-header text_size_l large-header main-font">
            Wine & Beer
          </h3>
          <ul>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Chapel Hill Shiraz
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$56</span>
                <span className="additional-font text_size_xs description position-description">
                  AU | Bottle
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Catena Malbec
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$59</span>
                <span className="additional-font text_size_xs description position-description">
                  AU | Bottle
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  La Vieille Rosé
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$44</span>
                <span className="additional-font text_size_xs description position-description">
                  FR | 750 ml
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Rhino Pale Ale
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$31</span>
                <span className="additional-font text_size_xs description position-description">
                  CA | 750 ml
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Irish Guinness
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$26</span>
                <span className="additional-font text_size_xs description position-description">
                  IE | 750 ml
                </span>
              </div>
            </li>
          </ul>
        </div>
        <img src="/images/cocktail.png" alt="Коктейли" />
        <div className="specials-description">
          <h3 className="specials-description-header text_size_l large-header main-font">
            Cocktails
          </h3>
          <ul>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Aperol Spritz
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$20</span>
                <span className="additional-font text_size_xs description position-description">
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Dark 'N' Stormy
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$16</span>
                <span className="additional-font text_size_xs description position-description">
                  Dark rum | Ginger beer | Slice of lime.
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Daiquiri
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$10</span>
                <span className="additional-font text_size_xs description position-description">
                  Rum | Citrus juice | Sugar
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Old Fashioned
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$31</span>
                <span className="additional-font text_size_xs description position-description">
                  Bourbon | Brown sugar | Angostura Bitters
                </span>
              </div>
            </li>
            <li>
              <div className="position">
                <h4 className="main-font big-header text_size_m position-header">
                  Negroni
                </h4>
                <div className="position-line"></div>
                <span className="main-font text_size_m small-header">$26</span>
                <span className="additional-font text_size_xs description position-description">
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button className="button text_size_xs main-font">View More</button>
    </section>
  );
}

export default Special;
