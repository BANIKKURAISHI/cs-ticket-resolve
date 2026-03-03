import { Suspense, useState } from "react";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Nav and Footer/Navbar";
import Tickets from "./Component/Ticket/Tickets";
import Tasks from "./Component/Task/Tasks";

const customersFetch=async()=>{
  const res=await fetch("/customers.json")
  return res.json()
}
const fetchData=customersFetch()


function App() {
const [problems,setProblems]=useState([])
const handleProblems=(ticket)=>{
const problemArray=([...problems,ticket])
setProblems(problemArray)
}

  return (
    <>
      <Navbar></Navbar>
      <Banner problems={problems}></Banner>
      <div className="w-11/12 flex mx-auto flex-col md:flex-row ">
        <div className="max-w-2/3">
      <Suspense
        fallback={
          <p>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
          </p>
        }
      >
        <Tickets fetchData={fetchData} handleProblems={handleProblems}></Tickets>
      </Suspense>
      </div>

      <div className="ml-10 ">
        <h1 className="font-medium  text-4xl text-shadow-cyan-900 ">Task Status </h1>
        <Tasks problems={problems}></Tasks>
        <h1 className="font-medium  text-4xl text-shadow-cyan-900 mt-5">Resolved Task</h1>
      </div>
      </div>
    </>
  );
}

export default App;
