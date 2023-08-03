
import React, { useState } from 'react';
import './App.css';
import Cells from './components/Cells'

function App() {

  const [cell, setCell] = useState(["","","","","","","","",""]);
  
  
  return (
    <div className="App">
      <Cells 
      cell ={cell}
      setCell ={setCell}
     
      />
      
    </div>
  );
}

export default App;
