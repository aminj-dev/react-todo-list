import { AddTask } from "../components/AddTask";
import { TasksList } from "../components/TasksList";

export const Home = ({ tasks, setTasks }) => {
  return (
    <div className="home">
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
