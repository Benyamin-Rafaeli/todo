import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';
import ItemAddFrom from '../item-add-from';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: 'Drink', important: false, id: 1 },
      { label: 'Eat', important: true, id: 2 },
      { label: 'Sleep', important: false, id: 3 },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return { todoData: newArray };
    });
  };

  onToggleImportant = id => {
    console.log('onToggleImportant', id);
  };

  onToggleDone = id => {
    console.log('onToggleDone', id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddFrom onItemAdded={this.addItem} />
      </div>
    );
  }
}
