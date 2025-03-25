import './App.css';
import React, { useState } from "react";

function App() {
  const[name,setName]=useState("");
  const [darkMode, setDarkMode] =useState(false);
  return (
    <div className={darkMode?"container.dark":"container"}>
      <h1>Welcome to Student Dashboard</h1>
      <input 
        type="text"
        placeholder="Enter your Name" 
        className="name-input" 
        value={name}
        onChange={(e) => setName(e.target.value)}
       ></input>
      <p>Hello, {name}</p>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default App;
