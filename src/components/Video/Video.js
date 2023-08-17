import "./Video.css";
import videoPoster from "../../images/video-image.png";

function Video() {
  return (
    <section className="video">
      <video
        controls
        src=""
        poster={videoPoster}
        width="100%"
        height="auto"
      >
        Sorry, but your browser does not support embedded videos.
      </video>
    </section>
  );
}

export default Video;
