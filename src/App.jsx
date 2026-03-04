import { Suspense, useState } from "react";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Nav and Footer/Navbar";
import Tickets from "./Component/Ticket/Tickets";
import Tasks from "./Component/Task/Tasks";
import Resolved from "./Component/Resolved/Resolved";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./Component/Nav and Footer/Footer";
const customersFetch = async () => {
  const res = await fetch("/customers.json");
  return res.json();
};
const fetchData = customersFetch();

function App() {
  const [problems, setProblems] = useState([]);
  const [solved, setSolved] = useState([]);
  const handleProblems = (ticket) => {
    const problemArray = [...problems, ticket];

    setProblems(problemArray);
    toast("Please wait we are working now in your problems Thank You");
  };

  const removeResolved = (done) => {
    const filterInfo = problems.filter((rem) => rem.id !== done.id);
    setProblems(filterInfo);
    toast("Your Problem is solve  Thank You");
  };

  const solvedButton = (done) => {
    const totalSolved = [...solved, done];
    setSolved(totalSolved);
    removeResolved(done);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner problems={problems} solved={solved}></Banner>
      <h1 className="text-3xl font-bold m-4 md:m-16">Customer Tickets list</h1>
      <div className="w-11/12 flex mx-auto  flex-col-reverse md:flex-row ">
        <div className="w-full md:max-w-2/3">
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
            <Tickets
              fetchData={fetchData}
              handleProblems={handleProblems}
            ></Tickets>
          </Suspense>
        </div>

        <div className="ml-10 ">
          <h1 className="font-medium  text-4xl text-shadow-cyan-900 ">
            Task Status{" "}
          </h1>
          <Tasks solvedButton={solvedButton} problems={problems}></Tasks>
          <h1 className="font-medium  text-4xl text-shadow-cyan-900 mt-5 mx-1">
            Resolved Task
          </h1>
          <Resolved solved={solved}></Resolved>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
