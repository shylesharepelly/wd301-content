import "./TaskCard.css";

interface TaskItem {
  id: number;
  todoTitle: string;
  todoDescription: string;
  todoDueDate: string;
  removeTask: (tid: number) => void;
}
const Task = (props: TaskItem) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <a href={`/tasks/${props.id || ""}`}>
        <h2 className="text-base font-bold my-1">{props.todoTitle}</h2>
      </a>
      <p className="text-sm text-slate-500">{props.todoDueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.todoDescription}
      </p>
      <button
        className="deleteTaskButton"
        onClick={() => props.removeTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
