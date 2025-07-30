import { useContext, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MyContext } from "../context/MyContext";

export const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(MyContext);

  const handleAddTask = () => {
    dispatch({type: "handleAddTask", payload: { inputValue: inputValue },});
    setInputValue("");
  }

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
        <button
          onClick={() => handleAddTask()}
          className="add-btn"
        >
          <MdOutlineLibraryAdd />
        </button>
      </div>
    </div>
  );
};
