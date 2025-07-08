import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";

export const TasksList = ({ tasks, setTasks }) => {
  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedList = tasks.filter((task) => task.id !== id);
    setTasks(updatedList);
  };

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
                    <button>
                      <Link to={`task/${task.id}`}>
                        <FiMoreHorizontal />
                      </Link>
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
