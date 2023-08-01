import "./Main.css";
import Preview from "../Preview/Preview";
import Aside from "../Aside/Aside";
import About from "../About/About";
import Reservations from "../Reservations/Reservations";
import SeeMenu from "../SeeMenu/SeeMenu";

function Main() {
  return (
    <main className="main">
      <Aside />
      <Preview />
      <About />
      <Reservations />
      <SeeMenu />
    </main>
  );
}

export default Main;
