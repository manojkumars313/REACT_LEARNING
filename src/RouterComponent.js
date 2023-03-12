import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StudentList from "./Pages/StudentList";
import StudentForm from "./Pages/StudentForm";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/editStudent/:studentId" element={<StudentForm />} />
        <Route path="/addStudent" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
