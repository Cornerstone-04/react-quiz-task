import React, { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./Router";

function App() {
  
  return (
    <div className="App">
      <AppRoutes />
      {/* const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinute(minute + 1);
        setSeconds(0);
      } if(seconds === 30 && minute === 1){
        // navigate("/result")
      }
    }, 1000);
    return () => clearInterval(timer);
  }); */}
    </div>
  );
}

export default App;
