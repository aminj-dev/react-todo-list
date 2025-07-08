import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

export const TaskDetail = ({ tasks }) => {
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
        <button>
            <Link to='/' className="task-detail-card-btn">
            <IoReturnUpBackSharp />
            </Link>
        </button>
      </div>
    </div>
  );
};
