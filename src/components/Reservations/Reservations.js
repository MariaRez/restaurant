import './Reservations.css';

function Reservations() {
  return (
    <section className='reservations'>
      <img
        className='small-logo small-logo_reservation'
        src='/images/small-logo.svg'
        alt='Небольшой логотип'
      />
      <h4 className='small-header main-font text_size_m'>Reservations</h4>
      <img className='small-img' src='/images/spoon.svg' alt='Ложка' />
      <h2 className='reservation-header medium-header main-font text_size_xl'>
        Book A Table
      </h2>
      <form className='form'>
        <div className='booking'>
          <select className='booking-elements'>
            <option>1 person</option>
            <option>2 persons</option>
            <option>3 persons</option>
            <option>4 persons</option>
            <option>5 persons</option>
            <option>6 persons</option>
            <option>7 persons</option>
            <option>8 persons</option>
          </select>
          <select className='booking-elements'>
            <option>Today</option>
            <option>Tomorrow</option>
          </select>
          <select className='booking-elements'>
            <option>11:00 AM</option>
            <option>12:00 AM</option>
            <option>13:00 AM</option>
            <option>14:00 AM</option>
            <option>15:00 AM</option>
            <option>16:00 AM</option>
            <option>17:00 AM</option>
            <option>18:00 AM</option>
            <option>19:00 AM</option>
            <option>20:00 AM</option>
            <option>21:00 AM</option>
          </select>
        </div>
        <button className='button text_size_xs main-font'>Book Now</button>
      </form>
    </section>
  );
}

export default Reservations;
