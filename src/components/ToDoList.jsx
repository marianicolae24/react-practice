import KanbanContainer from "./KanbanContainer";
import Bin from "./Bin";

import { DndContext } from "@dnd-kit/core";

const ToDoList = ({ todos, moveTask, deleteTask }) => {
  function handleDragEnd({ active, over }) {
    if (over.id === "bin") {
      deleteTask(active.id);
    } else {
      moveTask(active.id, over.id);
    }
  }

  function filterTasks(allTasksList, category) {
    return allTasksList.filter((task) => task.status === category);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        <KanbanContainer
          title={"To Do"}
          content={filterTasks(todos, "to-do")}
          id="to-do"
        />
        <KanbanContainer
          title={"In Progress"}
          content={filterTasks(todos, "in-progress")}
          id="in-progress"
        />
        <KanbanContainer
          title={"Done"}
          content={filterTasks(todos, "done")}
          id="done"
        />
      </div>
      <Bin />
    </DndContext>
  );
};

export default ToDoList;
