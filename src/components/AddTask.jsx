import { useContext, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { MyContext } from "../context/MyContext";

export const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(MyContext);

  const handleAddTask = () => {
    if (inputValue !== "") {
      dispatch({ type: "handleAddTask", payload: { inputValue: inputValue } });
      setInputValue("");
    } else return inputValue
  };

  return (
    <div className="w-screen flex gap-4 flex-col">
      <h1 className="text-[25px] font-bold">TODO APP</h1>
      <div className="flex justify-center gap-4 h-12">
        <input
          className="border-2 border-[#8685ef] rounded-md bg-[#252525] shadow-[3px_3px_#8685ef] text-[#fafafa] text-xl px-4 py-2 w-[30vw] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] focus:outline-none"
          type="text"
          placeholder=".e.g got to the gym"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => handleAddTask()}
          className="flex items-center text-[#fafafa] uppercase p-2 text-[1.6rem] rounded-[6px] border-2 border-[#8685ef] bg-[#252525] shadow-[3px_3px_#8685ef] cursor-pointer w-12 justify-center"
        >
          <MdOutlineLibraryAdd />
        </button>
      </div>
    </div>
  );
};
