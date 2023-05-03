import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';

function App() {
  return (
    <div className='App'>
       <Routes>
        <Route exact path='/restaurant' element={<Home />} />
        <Route exact path='/bar' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
