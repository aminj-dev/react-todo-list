import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { ImCheckboxUnchecked } from "react-icons/im";

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
    console.log(tasks);
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

  return (
    <div className="main">
      <div className="add-task">
        <h1>TODO APP</h1>
        <input
          type="text"
          placeholder=".e.g got to the gym"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask}>ADD</button>
      </div>

      <div className="task-list">
        {tasks.length > 0 && (
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id} className="task">
                  <span className={task.done && "done"}>{task.title}</span>
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
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
