import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import BuildWorkout from './pages/BuildWorkout';
import WorkoutPicker from './pages/WorkoutPicker';

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="WorkoutPicker" element={<WorkoutPicker />} />
          <Route path="Home2" element={<Home2 />} />
          <Route path="BuildWorkout" element={<BuildWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
