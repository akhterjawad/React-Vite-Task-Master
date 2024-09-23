import Card from './components/Card'
import Center from './components/center'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'


// Definition: Components React ke reusable pieces of UI hain, jo HTML, CSS, aur JavaScript ka combination hote hain.
//Purpose: Components ka maqsad application ko chhoti-chhoti parts mein divide karna aur unko reuse karna hota hai.


function App() {
  function handleClick(data) {
    console.log(data);

  }

  return (
    <>
      <Navbar />
      <button className='bg-blue-400'>button</button>
      <div className='text-blue-500 flex bg-gray-500 justify-center items-center'>
        <Center />
      </div>
      <Center />
      <button className="btn btn-accent">Accent</button>
      <Center />
      <Center />
      <Center />
      <div className='  flex flex-wrap gap-3 justify-center items-center'>
        <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="jota japani" description="nasli jota from sadder karachi bori bazar" />
        <Card src="https://images.unsplash.com/photo-1569580388550-50907e7bad86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" />
        {/* <Card src="../assets/annie.jpg"/> */}

      </div>
      <h1>footer</h1>
      <Footer handleClick={handleClick} title="vip" description='VIP in karachi' price='12300' />
    </>
  )
}

export default App
