import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const slideIn = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="App">
      <Card
        header="Bet won"
        body="One of your bet(s) won."
        footer="view details"
        isVisible={isVisible}
      />
   
    
      <button onClick={slideIn}>Slide In</button>
    </div>
  );
}

export default App;
