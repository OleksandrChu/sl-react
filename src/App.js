import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main/Main";
import NavigationBar from "./components/navbar/NavigationBar";

function App() {
  return (
      <Router>
        {/*<Header/>*/}
        <NavigationBar/>
        <Main/>
      </Router>
  );
}

export default App
