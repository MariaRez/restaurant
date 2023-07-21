import "./Scroll.css";

function Scroll({scrollImage, altScroll, hrefScroll, classNameScroll}) {
  return (
    <a className={`scroll-images ` + classNameScroll} href={hrefScroll}>
      <img src={scrollImage} alt={altScroll} />
    </a>
  );
}

export default Scroll;
