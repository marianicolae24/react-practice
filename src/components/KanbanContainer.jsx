import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

function KanbanContainer({ title, content, id }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      className="kanban-container"
      ref={setNodeRef}
      style={{ backgroundColor: isOver ? "lavender" : "transparent" }}
    >
      <h2>{title}</h2>
      {content.map((task) => (
        <Task key={task.id} id={task.id} text={task.text} />
      ))}
    </div>
  );
}

export default KanbanContainer;
