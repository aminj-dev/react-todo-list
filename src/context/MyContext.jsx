import { createContext, useEffect, useReducer } from "react";
import { getInitialState, updetLocalStorage } from "./LocalStorage";

export const MyContext = createContext();
const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "handleAddTask":
      const time = new Date().toLocaleString("fa-IR");
      const newTask = {
        id: Date.now(),
        title: action.payload.inputValue,
        done: false,
        date: time,
      };
      return [...state, newTask];

    case "handleToggleDone":
      const updatedTasks = state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            done: !task.done,
          };
        } else {
          return task;
        }
      });
      return (state = updatedTasks);

    case "handleDeleteTask":
      const updatedList = state.filter((task) => task.id !== action.payload.id);
      return (state = updatedList);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);

  useEffect(() => {
    updetLocalStorage(state)
  }, [state])

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
