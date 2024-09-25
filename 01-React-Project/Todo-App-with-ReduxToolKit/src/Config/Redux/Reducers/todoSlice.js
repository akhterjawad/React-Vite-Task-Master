// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const todoSlice = createSlice({
//     name: "Todos",
//     initialState: {
//         todo: []
//     },
//     reducers: {
//         addTodo: (state, action) => {
//             // state ka matlb initial state
//             state.todo.push({
//                 title: action.payload.title,
//                 id: nanoid()
//             })
//         },
//         removeTodo: (state, action) => {
//             state.todo.splice(action.payload.index, 1)
//         },
//         EditTodo: (state, action) => {
//             let Updatevalue = prompt("enter update value")
//             if (Updatevalue !== ``) {
//                 state.todo.splice(action.payload.index, 1, {
//                     title: Updatevalue,
//                     id: nanoid()
//                 })
//                 return
//             }
//         }
//     }
// })

// export const { addTodo, removeTodo, EditTodo } = todoSlice.actions
// export default todoSlice.reducer
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Retrieve todos from localStorage if available
const savedTodos = JSON.parse(localStorage.getItem('SendData')) || [];

console.log(savedTodos);

export const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todo: savedTodos, // Initialize the Redux state with data from localStorage
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid(), // Generate a unique ID for each todo
            });
        },
        removeTodo: (state, action) => {
            state.todo.splice(action.payload.index, 1); // Remove the todo by index
        },
        EditTodo: (state, action) => {
            let updatedValue = prompt('Enter updated value');
            if (updatedValue !== '') {
                state.todo[action.payload.index].title = updatedValue; // Update the todo title
            }
        },
    },
});

export const { addTodo, removeTodo, EditTodo } = todoSlice.actions;
export default todoSlice.reducer;
