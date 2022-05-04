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
    <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
