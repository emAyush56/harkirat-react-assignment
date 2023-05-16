import { useState } from "react";
import Navbar from "./Navbar";
function ProblemSet() {
  const [problems, setProblems] = useState([
    {
      id: 100,
      title: "Bitwise OR Problem",
      difficulty: "Medium",
      acceptance: "38%",
    },
    {
      id: 101,
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      id: 102,
      title: "Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      id: 103,
      title: "Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
    {
      id: 104,
      title: "Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      id: 105,
      title: "Remove Linked List Elements",
      difficulty: "Medium",
      acceptance: "42%",
    },
  ]);

  return (
    <div>
      <h1>ProblemSet</h1>
      <Navbar />
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Acceptance</td>
            <td>Difficulty</td>
            <td>View</td>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <ProblemStatement
                key={problem.id}
                id={problem.id}
                title={problem.title}
                difficulty={problem.difficulty}
                acceptance={problem.acceptance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ProblemStatement(props) {
  let background = null;
  if (props.difficulty.toLowerCase() === "easy") {
    background = "yellowgreen";
  } else if (props.difficulty.toLowerCase() === "medium") {
    background = "orange";
  } else if (props.difficulty.toLowerCase() === "hard") {
    background = "orangered";
  }
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.acceptance}</td>
      <td>
        <span
          style={{
            background: background,
            color: "white",
            padding: "2px 6px",
          }}
        >
          {props.difficulty}
        </span>
      </td>
      <td>
        <button>View</button>
      </td>
    </tr>
  );
}

export default ProblemSet;
