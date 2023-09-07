import Booking from "../Booking/Booking";
import Button from "../Button/Button";
import Subscription from "../Subscription/Subscription";
import "./Form.css";

function Form({ classNameForm, isNewsletter }) {
  return (
    <form className={`form ${classNameForm}`}>
      {isNewsletter ? (
        <Subscription />
      ) : (
        <>
          <Booking />
          <Button buttonText="Book Now" />
        </>
      )}
    </form>
  );
}

export default Form;
