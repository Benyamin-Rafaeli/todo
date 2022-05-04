import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };
  return (
    <span className="todo-list-item" style={style}>
      {label}
      <button type="button" className="btn btn-outline-success">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger">
        <i className="fa trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
