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
import Blogs from "../Blogs/Blogs";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Newsletter from "../Newsletter/Newsletter";

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
      <Blogs />
      <PhotoGallery />
      <Newsletter />
    </main>
  );
}

export default Main;
