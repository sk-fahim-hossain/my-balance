import React from "react";
import Main from "../../layout/Main";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[25%] min-h-screen bg-white border-r">
      <p className="text-center text-black font-bold text-3xl my-3">Wallet</p>
      <div>
        <div className="ml-3 ">
          <Link
            className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]"
            to="/dashboard"
          >
            {" "}
            Dashboard
          </Link>

          <Link
            className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]"
            to="/income"
          >
            Income
          </Link>
          <Link
            className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]"
            to="/cost"
          >
            Cost
          </Link>
          <Link
            className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]"
            to="/loan"
          >
            Loan
          </Link>

          <button className="btn btn-wide my-3 text-white  border-0 bg-[#0E35FF] text-xl">
            Anlytics
          </button>
          <Link
            className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]"
            to="/reports"
          >
            Reports
          </Link>
          <button className="btn btn-wide my-3 text-white  border-0 bg-[#0E35FF] text-xl">
            Setting
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
