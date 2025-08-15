import { AddTask } from "../components/AddTask";
import { TasksList } from "../components/TasksList";

export const Home = () => {
  return (
    <div className="max-w-screen max-h-screen flex flex-col justify-center absolute top-4">
      <div className="flex gap-8 flex-col">
        <AddTask />
        <TasksList />
      </div>
    </div>
  );
};
