import React, { useState } from 'react';
import './listToDo.css';
import { AiFillEdit, AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editToDo, completeToDo } from '../../Reducer/todoSlider';

const ListToDo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState({
    id: '',
    content: '',
    contentError: null,
  });
  const [completedTodos, setCompletedTodos] = useState([]);

  const onEditToggle = (id, content) => {
    setIsEditing(true);
    setState({ ...state, id, content });
  };

  const handleComplete = (id) => {
    dispatch(completeToDo({ id }));
    const item = todoList.find((item) => item.id === id);
    setCompletedTodos([...completedTodos, item]);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const { content, contentError, id } = state;

  const edit = () => {
    if (content === '') {
      setState({ ...state, contentError: 'You must write something!' });
      return;
    }
    dispatch(editToDo({ content, id }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className='form'>
          <h2>Update your plan for today</h2>
          <input
            type='text'
            value={content}
            name='content'
            onChange={handleChange}
          />
          <button type='button' className='button' onClick={edit}>
            Edit
          </button>
          {contentError ? <div className='error'>{contentError}</div> : null}
        </div>
      ) : (
        <ul className='todos'>
          {todoList.map(({ id, content, completed }) => {
            return (
              <li className='grid' key={id}>
                <span
                  className='content'
                  style={
                    completed
                      ? { textDecoration: 'line-through' }
                      : {}
                  }
                >
                  {content}
                </span>
                <span className='todo-action'>
                  <AiOutlineCloseCircle
                    className='close'
                    onClick={() => dispatch(deleteToDo({ id }))}
                  />
                  <AiFillEdit
                    className='edit'
                    onClick={() => onEditToggle(id, content)}
                  />
                  {!completed && (
                    <button
                      className='button'
                      onClick={() => handleComplete(id)}
                    >
                      Complete
                    </button>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListToDo;
