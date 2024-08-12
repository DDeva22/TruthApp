import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//PAGES//
import MainPage from "./pages/Main.js";

import ErrorPage from "./pages/ErrorPage.js";


//COMPONENTS//
import componentNavBar from "./components/NavBar.js";


function App() {
  return (
    <div className="App">
      
    
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>


          <Route path = "*" element = {<ErrorPage/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
