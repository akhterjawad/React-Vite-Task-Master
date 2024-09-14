import React from 'react';
import Navbar_img from './assets/Frame 2 1.png';
import Start from './Components/Start';
import Inputs_img from './Components/Inputs_img';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
    <Navbar />
      {/* Content */}
      <Start />
      <Inputs_img />
    </>
  );
}

export default App;
