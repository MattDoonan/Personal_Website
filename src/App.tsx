import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./controllers/HomePage";
import Projects from "./controllers/Projects";

function App() {
  return (
      <div>
        <Router>
          <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
          </div>
        </Router>
      </div>
  );
}
export default App;