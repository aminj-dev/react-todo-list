import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { TaskDetail } from "./Pages/TaskDetail";
import { NotFound } from "./Pages/NotFound";
import { TodoProvider } from "./context/MyContext";

function App() {
  return (
    <Router>
      <TodoProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route path="/task/:id" element={<TaskDetail/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TodoProvider>
    </Router>
  );
}

export default App;
