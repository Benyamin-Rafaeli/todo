import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import './app.css';

const App = () => {
  const todoData = [
    { label: 'Drink', important: false, id: 1 },
    { label: 'Eat', important: true, id: 2 },
    { label: 'Sleep', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDeleted={id => console.log('del', id)} />
    </div>
  );
};

export default App;
