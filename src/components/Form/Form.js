import Booking from "../Booking/Booking";
import Button from "../Button/Button";
import "./Form.css";

function Form({classNameForm}) {
  return (
    <form className={`form ` + classNameForm} >
      <Booking />
      <Button buttonText="Book Now" />
    </form>
  );
}

export default Form;
