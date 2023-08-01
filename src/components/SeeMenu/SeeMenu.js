import "./SeeMenu.css";
import SmallLogo from "../SmallLogo/SmallLogo";

function SeeMenu() {
  return (
    <section className="see-menu" id="menu">
      <SmallLogo classNameSmallLogo="small-logo_place_see-menu" />
      <div className="see-menu__overlay"></div>
      <ul className="see-menu__list text_size_xl main-font medium-header">
        <li className="see-menu__list-item">Bar Menu</li>
        <li className="see-menu__list-item">Food Menu</li>
        <li className="see-menu__list-item">Desserts Menu</li>
      </ul>
    </section>
  );
}

export default SeeMenu;
