import { useRef, useState } from 'react'
import './App.css'






const App = () => {
    let inputVal = useRef()
    let [todo, setTodo] = useState([])
    function addTodo(event) {
        event.preventDefault()
        let updateTodo = inputVal.current.value;
        todo.push(updateTodo);
        setTodo([...todo])
        console.log(todo);

        console.log(inputVal.current.value);

    }
    return (
        <>
            <form onSubmit={addTodo}>
                <input ref={inputVal} type="text" name="" id="" />
                <button>add</button>
            </form>
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default App
