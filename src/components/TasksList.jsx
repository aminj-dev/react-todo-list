import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const TasksList = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MyContext);

  return (
    <div className="flex w-screen justify-center">
      {state.length > 0 && (
        <ul className="flex flex-col gap-4">
          {state
            .slice()
            .reverse()
            .map((task) => {
              return (
                <li key={task.id} className="text-white relative flex items-center list-none bg-[#8685ef] shadow-[6px_6px_15px_#bebebe] rounded-lg py-[0.2rem] w-[40vw] h-10">
                  <span className={task.done ? "line-through text-2xl left-3 absolute" : "text-2xl absolute left-3"}>{task.title}</span>
                  <div className="absolute right-4 flex items-center gap-2">
                    <button onClick={() => navigate(`task/${task.id}`)} className="cursor-pointer bg-transparent text-2xl border-none">
                      <FiMoreHorizontal />
                    </button>
                    <button
                      className="text-red-600 cursor-pointer bg-transparent text-2xl border-none"
                      onClick={() =>
                        dispatch({
                          type: "handleDeleteTask",
                          payload: { id: task.id },
                        })
                      }
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <button
                      className="text-white cursor-pointer bg-transparent text-2xl border-none"
                      onClick={() =>
                        dispatch({
                          type: "handleToggleDone",
                          payload: { id: task.id },
                        })
                      }
                    >
                      {task.done === false ? (
                        <ImCheckboxUnchecked />
                      ) : (
                        <FaSquareCheck />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
