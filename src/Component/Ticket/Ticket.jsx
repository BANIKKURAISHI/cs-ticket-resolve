import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Ticket = ({ ticket, handleProblems }) => {
  const { id, title, status, priority, description, customer, createdAt } =
    ticket;
  return (
    <div
      onClick={() => {
        handleProblems(ticket);
      }}
    >
      <div className="card w-[360px]  h-full bg-base-100 md:w-[450px] h-56 card-md shadow-sm p-5 ">
        <div className="flex flex-row justify-between ">
          <h2 className="card-title">{title}</h2>
          <button
            className={
              status === "Open"
                ? "bg-[#b9f8cf] btn text-xl rounded-2xl "
                : "bg-amber-500 btn text-xl rounded-xl"
            }
          >
            <span className="text-xl text-[#02a53b]">
              <FaCircle />
            </span>{" "}
            {status}
          </button>
        </div>
        <p className="mt-5 mb-5">{description}</p>
        <div className="flex flex-row justify-between text-xl ">
          <div className="flex flex-row justify-between gap-2">
            <h1>#{id}</h1>
            <h1
              className={
                priority === "High"
                  ? "text-red-600"
                  : priority === "Medium"
                    ? "text-amber-400"
                    : "text-green-500"
              }
            >
              {priority}
            </h1>
          </div>
          <div className="flex flex-row justify-between gap-2 text-xl">
            <span>{customer}</span>
            <span className="mt-1">
              <MdOutlineDateRange />
            </span>
            <h1> {createdAt}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
