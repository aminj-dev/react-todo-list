import { AddTask } from "../components/AddTask";
import { TasksList } from "../components/TasksList";

export const Home = () => {
  return (
    <div className="home">
      <AddTask />
      <TasksList />
    </div>
  );
};
