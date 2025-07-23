import { createContext, useState } from "react";

export const MyContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = ({inputValue ,setInputValue}) => {
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
    <MyContext.Provider value={{tasks ,handleAddTask , setTasks, handleToggleDone, handleDeleteTask}}>
        { children }
    </MyContext.Provider>
  );
};
