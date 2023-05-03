import Preview from '../Preview/Preview';
import About from '../About/About';
import Reservations from '../Reservations/Reservations';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <Preview />
      <About />
      <Reservations />
    </main>
  );
}

export default Main;
