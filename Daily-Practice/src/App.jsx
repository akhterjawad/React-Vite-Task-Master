import { useRef, useState } from 'react'
import './App.css'



// let App = () => {
//     let [todo, setTodo] = useState([])
//     let inputV = useRef()
//     function addTodo(event) {
//         event.preventDefault()
//         todo.push(inputV.current.value)
//         setTodo([...todo])
//         console.log(todo);
//         console.log(inputV.current.value);
//         inputV.current.value = ``
//     }
//     function deleteTodo(i) {
//         todo.splice(i, 1)
//         setTodo([...todo])
//     }
//     return (
//         <>
//             <form onSubmit={addTodo}>
//                 <input type="text" ref={inputV} />
//                 <button type='submit' >add</button>
//             </form>
//             <ul>
//                 {todo.map((item, index) => (
//                     <div key={index}>
//                         <li>{item}</li>
//                         <button onClick={() => deleteTodo(index)}>delete</button>
//                         {/* <button onClick={edit}>editd</button> */}
//                     </div>
//                 ))}
//             </ul>
//         </>
//     )
// }


// export default App


// const App = () => {
//     let [count, setcount]= useState(0)
//     function addCounter() {
//         setcount(count += 1)
//         setcount(count += 1)
//         setcount(count += 1)
//         setcount(count += 1)
//     }
//     return (
//         <>
//         <h1>{count}</h1>
// <button onClick={addCounter}>add </button>
//         </>
//     )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
