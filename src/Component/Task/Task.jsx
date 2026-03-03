import React from "react";

const Task = ({ problem,solvedButton}) => {
 const { title } = problem;
 


  return (
    <>
    <div>
    <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>

        <button onClick={()=>solvedButton(problem)} className="btn mx-4 mb-4  bg-[#02a53b]">Complete</button>
      </div>
    </div> 
    </>
  );
};

export default Task;
