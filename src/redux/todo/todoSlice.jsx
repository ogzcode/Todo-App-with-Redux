import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const { id } = action.payload;
            const item = state.todos.find(item => item.id === id)
            item.completed = !item.completed;
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            const items = state.todos.filter(i => i.id !== id);
            state.todos = items;
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;