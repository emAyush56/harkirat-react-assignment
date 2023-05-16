import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ProblemSet from "./components/ProblemSet";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problemset" element={<ProblemSetR />} />
        <Route path="/problemset/all" element={<ProblemSet />} />
      </Routes>
    </div>
  );
}

function ProblemSetR() {
  return <Navigate to="/problemset/all" />;
}
export default App;
