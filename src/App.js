
import './App.css';
import ListToDo from './Components/listToDo/listToDo';
import AddToDo from './Components/addToDo/addToDo'
function App() {
  return (
    <div className="App">
      <AddToDo/>
      <ListToDo/>
    </div>
  );
}

export default App;
