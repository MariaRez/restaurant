import "./SmallLogo.css";
import smallLogo from "../../images/small-logo.svg"

function SmallLogo({classNameSmallLogo}) {
  return (
    <img
      className={`small-logo ` + classNameSmallLogo}
      src={smallLogo}
      alt="Small logo"
    />
  );
}

export default SmallLogo;
