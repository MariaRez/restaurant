import "./Button.css";

function Button({buttonText}) {
  return (
    <button className="button text_size_xs main-font">{buttonText}</button>
  );
}

export default Button;
