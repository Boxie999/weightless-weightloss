import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Home from './pages/Home';
import QuickWorkout from './pages/QuickWorkout';
import BuildWorkout from './pages/BuildWorkout';
import WorkoutConfirm from './pages/WorkoutConfirm';
import WorkoutPage from './pages/WorkoutPage';
import RestPage from './pages/RestPage';
import WorkoutFinish from './pages/WorkoutFinish';


function App() {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quickworkout" element={<QuickWorkout />} />
        <Route path="/buildworkout" element={<BuildWorkout />} />
        <Route path="/workoutconfirm" element={<WorkoutConfirm />} />
        <Route path="/workoutpage" element={<WorkoutPage />} />
        <Route path="/restpage" element={<RestPage />} />
        <Route path="/workoutfinish" element={<WorkoutFinish />} />
      </Routes>
    </Container>
  );
}

export default App;