import brand from './assets/brand_logo.png'
import shoes from './assets/shoe_image.png'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      {/* navbar start */}
      
      <Navbar/>

      {/* navbar end */}

      {/* main work start */}

      <main>
        <div className='flex flex-wrap ml-10 justify-center mt-10 '><p className=' below-sm:text-[5rem] text-[4rem] font-black text-black leading-none'>YOUR FEET<br />DESERVE<br />THE BEST</p>
          <div className=''><img className='w-[450px] ml-9 mt-[5px] below-md:mt-14' src={shoes} alt="shoes-img" /></div>
        </div>
        <div className='below-md:absolute flex flex-col justify-center items-center bottom-[21%] right-[47%] static'>
          <div className='font-semibold text-center below-md:text-start'>
            <p>YOUR FEET DESERVE THE BEST CARE AND COMFORT EVERY DAY.</p>
            <p>WHETHER YOU'RE WALKING, RUNNING, OR RELAXING, TREAT</p>
            <p>YOUR FEET TO PREMIUM QUALITY SHOES THAT PROVIDE</p>
            <p>SUPERIOR SUPPORT AND STYLE.</p>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
