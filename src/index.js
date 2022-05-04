import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    { label: 'Drink', important: false, id: 1 },
    { label: 'Eat', important: true, id: 2 },
    { label: 'Sleep', important: false, id: 3 },
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
