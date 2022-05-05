import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

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
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </span>
    );
  }
}

export default TodoListItem;

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'tomato' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   };
//   return (
//     <span className="todo-list-item" style={style}>
//       {label}
//       <button type="button" className="btn btn-outline-success">
//         <i className="fa fa-exclamation" />
//       </button>
//
//       <button type="button" className="btn btn-outline-danger">
//         <i className="fa fa-trash-o" aria-hidden="true"></i>
//       </button>
//     </span>
//   );
// };
