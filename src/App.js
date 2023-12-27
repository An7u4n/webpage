import './App.css';
import SideBar from './components/containers/sidebar';
import TaskListComponent from './components/containers/tasks_list';
//import Greetings from './components/pure/greetings';

function App() {
  return (
    <div className="App flex h-screen w-screen">
      <SideBar />
      <TaskListComponent />
    </div>
  );
}

export default App;
