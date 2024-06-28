function AddTask({ addNewTask }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newTask = event.target.elements.task.value;
    addNewTask(newTask);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="task"
        id="task"
        rows={5}
        cols={30}
        minLength={10}
        maxLength={100}
      ></textarea>
      <button>Add task</button>
    </form>
  );
}

export default AddTask;
