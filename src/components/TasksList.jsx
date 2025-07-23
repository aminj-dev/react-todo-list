import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const TasksList = () => {
  const navigate = useNavigate();
  const { tasks, handleToggleDone, handleDeleteTask } = useContext(MyContext);

  return (
    <div className="task-list">
      {tasks.length > 0 && (
        <ul>
          {tasks
            .slice()
            .reverse()
            .map((task) => {
              return (
                <li key={task.id} className="task">
                  <span className={task.done ? "done" : ""}>{task.title}</span>
                  <div className="buttons">
                    <button onClick={() => navigate(`task/${task.id}`)}>
                      <FiMoreHorizontal />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <button
                      className="check-btn"
                      onClick={() => handleToggleDone(task.id)}
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
