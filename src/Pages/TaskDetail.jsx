import { useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const TaskDetail = () => {
  const {tasks} = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return <h1>there is no task with id:{id}</h1>;
  return (
    <div className="task-datail-container">
      <div className="task-detail-card">
        <h2>title : {task.title}</h2>
        <h2>id : {id}</h2>
        <h2>status : {task.done ? "task done" : "not done"}</h2>
        <h2>time: {task.date}</h2>
        <button className="task-detail-card-btn" onClick={() => navigate('/')}>
            <IoReturnUpBackSharp />
        </button>
      </div>
    </div>
  );
};
