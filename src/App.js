import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';

//PAGES//
import MainPage from "./pages/Main.js";


function App() {
  return (
    <div className="App">
      
    
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>



        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
