import { useRef, useState } from 'react'
import './App.css'

// function App() {
//   let [num, setNum] = useState(0)
//   function addNum() {
//     setNum(num + 1)
//   }
//   function lessNum() {
//     if (num === 0) {
//       alert(`The value does not go below zero`)
//     } else {
//       setNum(num - 1)
//     }
//   }
//   function resetNum() {
//     if (!num===0) {
//       setNum(num=0)
//     } else {
//       alert(`number is already reset`)
//     }
//   }
//   console.log(num);

//   return (
//     <>
//     <div className="container">
//       <h1 className="counter">{num}</h1>
//       <div className="button-group">
//         <button className="btn" onClick={addNum}>Add</button>
//         <button className="btn" onClick={lessNum}>Less</button>
//         <button className="btn reset" onClick={resetNum}>Reset</button>
//       </div>
//     </div>
//     </>
//   )
// }

// function App() {
//   let [todo, setTodo] = useState([])
//   let InputVal = useRef()


//   let addTodo = event => {
//     event.preventDefault()
//     let InputValue = InputVal.current.value
//     setTodo([...todo, InputValue])
//     console.log([...todo, InputValue]);


//     console.log(InputValue);
//   }


//   return (
//     <>
//       <form onSubmit={addTodo}>
//         <input type="text" ref={InputVal} />
//         <button type='submit'>add</button>
//       </form>
//       <ul>
//         {todo.map((item, index) => (
//           <div key={index}>
//             <li>{item}</li>
//           </div>
//         ))}
//       </ul>
//     </>
//   )
// }
const App = () => {
    let [num, setnum] = useState(0)

    function add() {
        setnum(num + 1)
    }
    function less() {
        setnum(num - 1)
    }
    function reset() {
        setnum(0)
    }

    return (
        <>
        <div>{num}</div>
            <button onClick={add}>add</button>
            <button onClick={less}>less</button>
            <button onClick={reset}>reset</button>

        </>
    )
}


export default App
