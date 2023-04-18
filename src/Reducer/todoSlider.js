
import {createSlice} from '@reduxjs/toolkit'
export const todoSlider = createSlice({
    name: 'toDo',
    initialState :{
        todoList : [
            {id: 1, content: "Wake up early", completed: false},
            {id: 2, content: "Hit the Gym", completed: false}
        ]
    },
    reducers:{
        addToDo: (state,action) => {
            let newToDoList = {
                id : Math.random(),
                content:action.payload.newContent,
                completed: false
            }
            state.todoList.push(newToDoList)
        },
        deleteToDo: (state,action) => {
            let { todoList} = state;
            state.todoList = todoList.filter((item) =>
               item.id !== action.payload.id
            )
        },
        editToDo : (state,action) =>{
            let {todoList} = state;
            state.todoList = todoList.map((item) =>
                item.id === action.payload.id ? {...item, content: action.payload.content} : item
            )
        },
        completeToDo: (state, action) => {
            let { todoList } = state;
            state.todoList = todoList.map((item) => 
                item.id === action.payload.id ? { ...item, completed: true } : item
            )
        }
    },
})

export const { addToDo, deleteToDo, editToDo, completeToDo } = todoSlider.actions;

export default todoSlider.reducer;
