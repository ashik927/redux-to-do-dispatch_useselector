import logo from './logo.svg';
import './App.css';
import Todoinput from './Components/Todoinput';
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App m-5">
      <Todoinput></Todoinput>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
