import React from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";



function App() {
  return (
    <div className="App">
        <Navigation/>
      <ItemBox/>
    </div>
  );
}

export default App;
