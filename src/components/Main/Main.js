import Preview from '../Preview/Preview';
import About from '../About/About';
import Reservations from '../Reservations/Reservations';
import './Main.css';
import SeeMenu from '../SeeMenu/SeeMenu';
import Special from '../Special/Special';

function Main() {
  return (
    <main className='main'>
      <Preview />
      <About />
      <Reservations />
      <SeeMenu />
      <Special />
    </main>
  );
}

export default Main;
