import React from 'react';
import './App.css';
import Navigation from "./modules/Navigation";
import ItemBox from "./modules/ItemBox";
import ItemSort from "./modules/ItemSort";



function App() {
  return (
    <div className="App">
        <Navigation/>
      <ItemBox/>
      {/*<ItemSort/>*/}
    </div>
  );
}

export default App;
