import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre"
import './App.css';
import './style.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() =>{
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
     <Preloader  load={load} /> 
      <div className="App">
        <h1>Hello world</h1>

        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
