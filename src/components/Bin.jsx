import { useDroppable } from "@dnd-kit/core";

function Bin() {
  const { isOver, setNodeRef } = useDroppable({
    id: "bin",
  });

  return (
    <div
      className="bin"
      ref={setNodeRef}
      style={{ backgroundColor: isOver ? "red" : "transparent" }}
    >
      <h2>Recycle Bin</h2>
    </div>
  );
}

export default Bin;
