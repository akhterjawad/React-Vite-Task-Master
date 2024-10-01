import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, EditTodo } from './Config/Redux/Reducers/todoSlice';

let App = () => {
  let todoVal = useRef();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos.todo);

  // Effect to synchronize localStorage with Redux state
  useEffect(() => {
    localStorage.setItem('SendData', JSON.stringify(selector));

  }, [selector]);

  // Add new todo
  function addTodoInRedux(event) {
    event.preventDefault();

    if (todoVal.current.value === '') {
      alert('please enter something');
      return;
    }

    dispatch(
      addTodo({
        title: todoVal.current.value,
      })
    );

    todoVal.current.value = '';
  };

  // Delete a todo
  function deleteItemFromRedux(index) {
    dispatch(
      removeTodo({
        index,
      })
    );
  };

  // Edit a todo
  function editItemFromRedux(index) {
    dispatch(
      EditTodo({
        index,
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Todo List</h1>

        {/* Form to add new todos */}
        <form className="flex items-center space-x-4 mb-6" onSubmit={addTodoInRedux}>
          <input
            type="text"
            ref={todoVal}
            className="flex-1 px-4 py-2 w-[50%] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new todo"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        {/* Todo List Display */}
        <ul className="space-y-4">
          {selector.length > 0 ? (
            selector.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <span className="font-medium text-gray-700">{item.title}</span>
                <div className="space-x-3">
                  <button
                    onClick={() => deleteItemFromRedux(index)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editItemFromRedux(index)}
                    className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))
          ) : (
            <h1 className="text-center text-gray-500">No todos found</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
