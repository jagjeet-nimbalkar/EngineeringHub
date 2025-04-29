import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "./Pages/Home";
import "./App.css";
import { CoursePage } from "./Pages/Courses";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Semester } from "./Pages/Semester";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/semester/:branchName" element={<Semester />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
