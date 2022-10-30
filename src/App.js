import logo from './logo.svg';
import './App.css';
import TodoList from "./components/todolist/todolist";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid p-5">
      <h1>Todo list</h1>
      <p>
        You can add new task to the list by pressing "Add new" button, you also
        can cross out completed tasks by clicking on them
      </p>
      <div className="row col-6 col-md-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
