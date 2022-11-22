import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Mission from './component/Misssions';
import MyProfile from './component/MyProfile';
import Nav from './component/Nav';
import Rockets from './component/rockets';

Rockets

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="displayPart">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/Missions" element={<Mission />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
