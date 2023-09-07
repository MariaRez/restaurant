import Spoon from "../Spoon/Spoon";
import SmallLogo from "../SmallLogo/SmallLogo";
import "./Reservations.css";
import Form from "../Form/Form";

function Reservations() {
  return (
    <section className="reservations">
      <SmallLogo classNameSmallLogo="small-logo_place_reservation"/>
      <h4 className="small-header main-font text_size_m">Reservations</h4>
      <Spoon />
      <h2 className="reservation__header medium-header main-font text_size_xl">
        Book A Table
      </h2>
      <Form classNameForm="form_direction_column" isNewsletter={false}/>
    </section>
  );
}

export default Reservations;
