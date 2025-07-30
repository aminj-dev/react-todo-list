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
    <div className="task-list">
      {state.length > 0 && (
        <ul>
          {state
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
                      className="check-btn"
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
