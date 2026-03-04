import React from "react";
import Task from "./Task";

const Tasks = ({ problems, solvedButton }) => {
  
  if (problems.length === 0) {
    return (
      <p className="text-lg text-black m-2">
        Select a ticket to add to Task Status
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-5 mt-4">
      {problems.map((problem) => (
        <Task problem={problem} key={problem.id} solvedButton={solvedButton}></Task>
      ))}
    </div>
  );
};

export default Tasks;
