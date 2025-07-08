import { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

export const AddTask = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    const time = new Date().toLocaleString("fa-IR");
    const newTask = {
      id: Date.now(),
      title: inputValue,
      done: false,
      date: time
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  return (
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
  );
};
