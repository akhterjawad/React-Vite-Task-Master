


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

// const App = () => {
//   return (
//     <>
//       <Navbar/>
//     </>
//   )
// }

// const App = () => {
//   let [count, setcount] = useState(0)
//   function add() {

//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa nahi hoga
//     setcount(count + 1)
//     setcount(count + 1)


//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa hojayga but bad practice ha.
//     setcount(count += 1)
//     setcount(count += 1)


//     // agar aap 1 dafama 2 bar setcount ka function run karna chata ha to nicha diagay tarika sa hojayga or ya good practice ha.
//     setcount(prevVal => prevVal + 1);
//     setcount(prevVal => prevVal + 1);
//   }
//   return (
//     <>
//       <button onClick={add}>added {count}</button>
//     </>
//   )
// }


// const App = () => {
//   let [todo, setTodo] = useState([])
//   let inputVal = useRef()
//   function Add(event) {
//     event.preventDefault()
//     console.log(inputVal.current.value);
//     // todo.push(inputVal.current.value)
//     setTodo([...todo, inputVal.current.value])
//     inputVal.current.value = ``
//   }
//   function deleted(i) {
//     todo.splice(i, 1)
//     setTodo([...todo])
//   }
//   function edit(i) {
//     let updateVal = prompt(`.`)
//     todo.splice(i, 1, updateVal)
//     setTodo([...todo])
//   }
//   return (
//     <>
//       <form onSubmit={Add}>
//         <input type="text" ref={inputVal} />
//         <button>addTodo</button>
//       </form>
//       <ul>
//         {todo.map((item, index) => (
//           <li key={index}>{item}
//             <div>
//               <button onClick={() => deleted(index)}>deleted</button>
//               <button onClick={() => edit(index)}>edit</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './App.css'

const App = () => {
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    //             .then(json => {
    //                 console.log(json)
    //             })
    //         setData(res);

    //     }
    //     getData()
    // }, [])

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const res = await response.json();
            console.log(res);
            setData(res);
        }
        getData()
    }, [])
    return (
        <>
            {data ? data.map(item => (
                <h1 key={item.id}>{item.name}</h1>
            )) : <p>loading</p>}



        </>
    )
}

export default App
