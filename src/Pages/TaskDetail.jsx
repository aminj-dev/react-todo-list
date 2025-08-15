import { useNavigate, useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const TaskDetail = () => {
  const { state } = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const task = state.find((t) => t.id === Number(id));
  if (!task) return <h1>there is no task with id:{id}</h1>;
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#252525]  bg-[radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[length:30px_30px] bg-[-5px_-5px]">
      <div className="flex flex-col items-center justify-center  w-[350px] h-[250px] rounded-[50px] bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff]">
        <div className="flex gap-3 flex-col text-xl">
          <h2>title : {task.title}</h2>
          <h2>id : {id}</h2>
          <h2>status : {task.done ? "task done" : "not done"}</h2>
          <h2>time: {task.date}</h2>
          <button
            className="flex items-center justify-center border-none bg-[#252525] w-[5rem] rounded-[10px] text-white text-[2rem] font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoReturnUpBackSharp />
          </button>
        </div>
      </div>
    </div>
  );
};
