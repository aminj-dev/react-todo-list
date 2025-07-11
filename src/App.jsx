import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {Home} from './Pages/Home';
import {TaskDetail} from './Pages/TaskDetail';
import { NotFound } from "./Pages/NotFound";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks}/>}/>
          <Route path="/task/:id" element={<TaskDetail tasks={tasks}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
