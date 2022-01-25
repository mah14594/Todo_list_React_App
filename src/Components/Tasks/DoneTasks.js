import Task from "./Task";
import { useSelector } from "react-redux";
export default function TodoTasks() {
  const DoneTasksList = useSelector((state) => state.TasksReducer.DoneTasks);
  let content = (
    <h5 className="col-12 text-center text-danger">No Tasks Yet!</h5>
  );

  if (DoneTasksList.length > 0) {
    content = DoneTasksList.map((task, index) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        iscompleted="true"
        counter={index + 1}
      />
    ));
  }
  return (
    <div>
      <h1 className="text-center mt-5 mb-3">Completed Tasks</h1>
      <div>{content}</div>
    </div>
  );
}
