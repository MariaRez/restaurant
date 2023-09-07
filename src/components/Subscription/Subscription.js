import "./Subscription.css";

function Subscription() {
  return (
    <>
      <input
        className="subscription__input main-font text_size_xs large-header"
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
      />
      <button
        className="subscription__button text_size_xs main-font"
        type="submit"
      >
        Subscribe
      </button>
    </>
  );
}

export default Subscription;
