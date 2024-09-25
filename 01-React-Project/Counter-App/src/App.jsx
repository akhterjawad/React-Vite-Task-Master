import { useState } from 'react'
import './App.css'

function App() {
  let [num, setNum] = useState(0)
  function addNum() {
    setNum(num + 1)


    // agar aap 1 dafama 2 bar setNum ka function run karna chata ha to nicha diagay tarika sa nahi hoga
    // setNum(num + 1)
    // setNum(num + 1)


    // agar aap 1 dafama 2 bar setNum ka function run karna chata ha to nicha diagay tarika sa hojayga but bad practice ha.
    // setNum(num += 1)
    // setNum(num += 1)


    // agar aap 1 dafama 2 bar setNum ka function run karna chata ha to nicha diagay tarika sa hojayga or ya good practice ha.
    // setNum(prevVal => prevVal + 1);
    // setNum(prevVal => prevVal + 1);

  }
  function lessNum() {
    if (num === 0) {
      alert(`The value does not go below zero`)
    } else {
      setNum(num - 1)
    }
  }
  function resetNum() {
    if (num === 0) {
      alert(`number is already reset`)
    } else {
      setNum(num = 0)
    }
  }
  console.log(num);

  return (
    <>
      <div className="container">
        <h1 className="numer">{num}</h1>
        <div className="button-group">
          <button className="btn" onClick={addNum}>Add</button>
          <button className="btn" onClick={lessNum}>Less</button>
          <button className="btn reset" onClick={resetNum}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App

// import React from 'react'

// const App = () => {

//   let [num, setNum] = useState(0)
//   function addNum() {

//     setNum(num + 1)
//   }
//   function lessNum() {

//     setNum(num - 1)
//   }
//   function resetNum() {

//     setNum(num = 0)
//   }
//   return (
//     <>
//       <div className="container">
//         <h1 className="numer">{num}</h1>
//         <div className="button-group">
//           <button className="btn" onClick={addNum}>Add</button>
//           <button className="btn" onClick={lessNum}>Less</button>
//           <button className="btn reset" onClick={resetNum}>Reset</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
