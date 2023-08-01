import "./Booking.css";

function Booking() {
  return (
    <div className="booking">
      <select className="booking__items">
        <option>1 person</option>
        <option>2 persons</option>
        <option>3 persons</option>
        <option>4 persons</option>
        <option>5 persons</option>
        <option>6 persons</option>
        <option>7 persons</option>
        <option>8 persons</option>
      </select>
      <select className="booking__items">
        <option>Today</option>
        <option>Tomorrow</option>
      </select>
      <select className="booking__items">
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
  );
}

export default Booking;
