import "./Award.css";

function Award({awardImage, awardText, awardDescription}) {
  return (
    <li className="award">
    <img
      src={awardImage}
      alt="award"
      className="award__image"
    />
    <div>
      <h5 className="text_size_m main-font big-header">{awardText}</h5>
      <p className="award__description text_size_xs additional-font description no-bottom">
        {awardDescription}
      </p>
    </div>
  </li>
  );
}

export default Award;
