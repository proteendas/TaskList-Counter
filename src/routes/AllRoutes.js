import { Routes, Route } from "react-router-dom";
import { TaskList } from "../pages/TaskList";
import { Add } from "../pages/Add";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList title="Random" />} />
        <Route path="/counter" element={<Add />} />
      </Routes>
    </>
  )
}