import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <h1 className='text-primary'>To-do list!</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;