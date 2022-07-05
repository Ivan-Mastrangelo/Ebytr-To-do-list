import "./App.css";
import Header from "./components/Header.jsx";
import TaskInsert from "./components/TaskInsert.jsx";
import TodoList from "./components/TodoList.jsx";
import TasksProvider from "./context/TasksProvider.jsx";

function App() {
  return (
    <TasksProvider>
      <Header />
      <TaskInsert />
      <TodoList />
    </TasksProvider>
  );
}

export default App;
