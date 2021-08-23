/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>
      {' '}
      {props.todo.title}
    </li>
  );
}

export default TodoItem;
