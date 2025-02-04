import React from 'react';
import './App.css';
import SecondComp from './PropContainer/SecondComp';
import Statem from './Statem';
import Click from './Click';
import REsize from './REsize';
/*
const user = {
  name: "shiva",
  city: "hyd",
  area: "manikonda"
};
*/
function App() {
  return (
    <div className='container'>
      <Click/>
      <REsize/>
      
    </div>
  );
}

export default App;
