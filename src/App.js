import React from 'react';
import './App.css';
import ItemForm from "./modules/ItemForm";
import Navigation from "./modules/Navigation";


function App() {
  return (
    <div className="App">
        <Navigation/>
      <ItemForm/>
    </div>
  );
}

export default App;
