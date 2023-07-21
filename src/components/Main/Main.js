import "./Main.css";
import Preview from "../Preview/Preview";
import Aside from "../Aside/Aside";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <Aside />
      <Preview />
      <About />
    </main>
  );
}

export default Main;
