import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <Container>
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
