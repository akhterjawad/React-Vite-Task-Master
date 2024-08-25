import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const inputValue = useRef()

  let addTodo= event =>{
    event.preventDefault()
    const newTodo = inputValue.current.value;
    if (newTodo) {
      setTodo([...todo, newTodo]); // Properly updating the state
      inputValue.current.value = ''; // Clear the input field
    }else{
      alert(`enter something first`)
    }
  }
function deleteTodo(i) {
  todo.splice(i,1)
  setTodo([...todo])
  console.log(i,`delete`);
  console.log(todo);
}
function editTodo(i) {
  let editTodoValue = prompt(`enter edit value`,todo[i])
  todo.splice(i,1,editTodoValue)
  setTodo([...todo])
  console.log(i,`edit`);
  console.log(todo);
}

  return (
    <>
    <form onSubmit={addTodo} >
      <input type="text" placeholder='add todo' ref={inputValue} />
      <button  type='submit' onClick={addTodo}>add</button>
    </form>
<ul>
  {/* key ma index dena is not a good practice */}
  {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button onClick={()=> deleteTodo(index)}>delete</button>
          <button onClick={()=> editTodo(index) }>edit</button>
        </div>
      })}
</ul>
    </>
  )
}

export default App
