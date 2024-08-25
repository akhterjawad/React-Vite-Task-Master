import { useState, useRef } from 'react'

function App() {
  const [todo, setTodo] = useState([]);
  const inputValue = useRef()

  let addTodo = event => {
    event.preventDefault()
    const newTodo = inputValue.current.value;
    if (newTodo) {
      setTodo([...todo, newTodo]); // Properly updating the state
      inputValue.current.value = ''; // Clear the input field
    } else {
      alert(`enter something first`)
    }
  }
  function deleteTodo(i) {
    todo.splice(i, 1)
    setTodo([...todo])
    console.log(i, `delete`);
    console.log(todo);
  }
  function editTodo(i) {
    let editTodoValue = prompt(`enter edit value`, todo[i])
    todo.splice(i, 1, editTodoValue)
    setTodo([...todo])
    console.log(i, `edit`);
    console.log(todo);
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center p-4 min-vh-100 bg-light">
        <form
          onSubmit={addTodo}
          className="d-flex w-100 mb-4"
          style={{ maxWidth: '500px' }}
        >
          <input
            type="text"
            placeholder="Add a new todo"
            ref={inputValue}
            className="form-control me-2"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <ul className="list-group w-100" style={{ maxWidth: '500px' }}>
          {todo.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded shadow-sm"
            >
              <li className="list-group-item border-0">{item}</li>
              <div className="btn-group d-flex align-items-center justy-content-center flex-wrap">
                <button
                  onClick={() => editTodo(index)}
                  className="btn btn-outline-primary btn-sm"
                  style={{ width: '80px' }} // Set the width for both buttons
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="btn btn-outline-danger btn-sm"
                  style={{ width: '80px' }} // Set the width for both buttons
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App
