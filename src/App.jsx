import { useState } from "react";

import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

import "./App.css";

function App() {
  const [todos, setToDos] = useState([
    { id: 1, text: "buy milk", status: "to-do" },
    { id: 2, text: "wash bike", status: "in-progress" },
    { id: 3, text: "do the budget", status: "done" },
    { id: 4, text: "call jane", status: "to-do" },
  ]);

  function addNewTask(newTask) {
    setToDos((prevValue) => [
      ...prevValue,
      {
        id: prevValue[prevValue.length - 1] + 1,
        text: newTask,
        status: "to-do",
      },
    ]);
  }

  function modifyStatus(id, newStatus) {
    setToDos((prevValue) =>
      prevValue.map((task) => {
        if (task.id === id) {
          return { ...task, status: newStatus };
        } else {
          return { ...task };
        }
      })
    );
  }

  function deleteTask(id) {
    setToDos((prevValue) => prevValue.filter((task) => task.id !== id));
  }

  return (
    <div>
      <div className="upper-row">
        <AddTask addNewTask={addNewTask} />
        <div id="bin-area"></div>
      </div>
      <ToDoList todos={todos} moveTask={modifyStatus} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
