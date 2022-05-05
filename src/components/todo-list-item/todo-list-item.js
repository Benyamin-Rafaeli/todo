import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = { done: false };

  onLabelClick = () => {
    this.setState({ done: true });
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'tomato' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" style={style} onClick={this.onLabelClick}>
          {label}
        </span>

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

// export default TodoListItem;

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
