import react from 'react'
import Navbar_img from './assets/Frame 2 1.png'
import Start from './Components/Start'
import Inputs_img from './Components/Inputs_img'

function App() {

  return (
    <>
      <img className='mt-1 sm:ml-20 ml-3' src={Navbar_img} alt="no img" />

      <Start />

<Inputs_img />
    </>
  )
}

export default App
