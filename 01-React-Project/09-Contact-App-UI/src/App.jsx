import React from 'react';
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
