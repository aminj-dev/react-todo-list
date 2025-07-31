export const getInitialState = () => {
  const stored = localStorage.getItem("todoTasks");
  return stored ? JSON.parse(stored) : [];
};

export const updetLocalStorage = (state) => {
  localStorage.setItem("todoTasks", JSON.stringify(state));
};
