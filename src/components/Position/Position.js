import "./Position.css";

function Position({ positionHeader, positionPrice, positionDescription }) {
  return (
    <div className="position">
      <h4 className="main-font big-header text_size_m position__header">
        {positionHeader}
      </h4>
      <div className="position__line"></div>
      <span className="main-font text_size_m small-header">
        {positionPrice}
      </span>
      <span className="position__description additional-font text_size_xs description">
        {positionDescription}
      </span>
    </div>
  );
}

export default Position;
