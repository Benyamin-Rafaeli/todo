import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    { label: 'Drink', important: false },
    { label: 'Eat', important: true },
    { label: 'Sleep', important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
