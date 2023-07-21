import "./Spoon.css";
import spoon from "../../images/spoon-logo.svg";

function Spoon({classNameSpoon}) {
  return (
    <img className={`spoon ` + classNameSpoon} src={spoon} alt="Spoon logo" />
  );
}

export default Spoon;
