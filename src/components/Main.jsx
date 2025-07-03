import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: inputValue,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

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
    <div className="main">
      <div className="add-task">
        <h1>TODO APP</h1>
        <div className="add-task-form">
          <input
            type="text"
            placeholder=".e.g got to the gym"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTask} className="add-btn">
            <MdOutlineLibraryAdd />
          </button>
        </div>
      </div>

      <div className="task-list">
        {tasks.length > 0 && (
          <ul>
            {tasks
              .slice()
              .reverse()
              .map((task) => {
                return (
                  <li key={task.id} className="task">
                    <span className={task.done ? "done" : ""}>
                      {task.title}
                    </span>
                    <div className="buttons">
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
    </div>
  );
};
