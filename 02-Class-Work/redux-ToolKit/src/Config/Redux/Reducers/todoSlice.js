import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) => {
            // state ka matlb initial state
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo: (state, action) => {
            state.todo.splice(action.payload.index, 1)
        },
        UpdateTodo: (state, action) => {
            let Updatevalue = prompt("enter update value")

            state.todo.splice(action.payload.index, 1, {
                title: Updatevalue,
                id: nanoid()
            })
        }
    }
})

export const { addTodo, removeTodo, UpdateTodo } = todoSlice.actions
export default todoSlice.reducer