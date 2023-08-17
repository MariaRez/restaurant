import "./Main.css";
import Preview from "../Preview/Preview";
import Aside from "../Aside/Aside";
import About from "../About/About";
import Reservations from "../Reservations/Reservations";
import SeeMenu from "../SeeMenu/SeeMenu";
import Special from "../Special/Special";
import AboutChef from "../AboutChef/AboutChef";
import Customers from "../Customers/Customers";
import Video from "../Video/Video";
import OurLaurels from "../OurLaurels/OurLaurels";

function Main() {
  return (
    <main className="main">
      <Aside />
      <Preview />
      <About />
      <Reservations />
      <SeeMenu />
      <Special />
      <AboutChef />
      <Customers />
      <Video />
      <OurLaurels />
    </main>
  );
}

export default Main;
