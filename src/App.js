import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
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
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
