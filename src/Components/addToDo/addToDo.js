import React, { useState } from 'react'
import './addToDo.css'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../Reducer/todoSlider';
const AddToDo = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState({
        content: '',
        contentError: null
    });

    const handleChange =(e) => {
       setState({
        ...state,
        [e.target.name]: e.target.value,
        [`${e.target.name}Error`] : null
       })
    }

    const add =()=>{
        if(content === ''){
            setState({...state,
            contentError : 'you must write something!'
            })
            return
        }
        dispatch(addToDo({newContent :content}))
        setState({...state,content: ''})
    }
    const { content,  contentError} = state;
  return (
    <div className='form'>
      <h2>What is plan for today</h2>
      <input type='text' value={content}
        name='content' onChange={handleChange}
        />
        <botton type='button' className='button' onClick={add}>Add Task</botton>
    </div>
  )
}

export default AddToDo
