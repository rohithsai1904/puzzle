import {Login} from "./Login";
import {Register} from "./Register";
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Welcome} from "./Welcome";
import {Stages} from "./stage1";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />  
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/game" element={<Stages/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;