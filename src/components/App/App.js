import { Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantHome from '../RestaurantHome/RestaurantHome';
import BarHome from '../BarHome/BarHome';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/restaurant" element={<RestaurantHome />} />
        <Route exact path="/bar" element={<BarHome />} />
      </Routes>
    </div>
  );
}

export default App;
