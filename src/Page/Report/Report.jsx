import React, { useContext, useRef } from "react";
import { DataContext } from "../../Provider/DataProvider";
import toast from "react-hot-toast";

const Report = () => {
  const { userData } = useContext(DataContext);
  const printRef = useRef(null);
  const allIncomes = userData?.income?.allIncomes;
  console.log(allIncomes);

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    toast.success("User added succesfully");
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 rounded-lg m-3 border p-3">
        <div className="cost-reports  rounded-xl">
          <h2 className="text-2xl p-3">Cost Reports</h2>
          <table ref={printRef} className="table bg-slate-200">
            {/* head */}
            <thead>
              <tr className="text-lg text-black">
                <th></th>
                <th>Income Source</th>
                <th>Income Details</th>
                <th>Date</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allIncomes &&
                allIncomes?.map((inc, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{inc.incomeSource}</td>
                    <td> {inc.incomeDetails}</td>
                    <td> {inc.incomeDate ? inc.incomeDate : "Not entered"}</td>
                    <td>{inc.incomeAmount}</td>
                    <td>
                      <button
                        onClick={() =>
                          document.getElementById("modal").showModal()
                        }
                        className="btn-sm btn-ghost"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="btn-sm bg-red-400 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <dialog id="modal" className="modal">
          <div className="modal-box">
            <form className="w-auto" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Income Source</span>
                </label>
                <input
                  type="text"
                  name="incomeSource"
                  placeholder="Source of Income"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Date(date can not be edite)
                    </span>
                  </label>
                  <input
                    type="date"
                    name="incomeDate"
                    placeholder="Income Date"
                    className="input input-bordered text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Amount</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Amount"
                    name="incomeAmount"
                    className="input input-bordered text-white"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Details"
                  name="incomeDetails"
                  className="input input-bordered text-white"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0E35FF] border-0">
                  Add Income
                </button>
              </div>
            </form>

            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <button className="btn  absolute right-2 top-2">Close</button>
            </form>
          </div>
        </dialog>
        <div className="income-reports">
          <h2 className="text-2xl p-3">Income Reports</h2>
          <table ref={printRef} className="table bg-slate-200">
            {/* head */}
            <thead>
              <tr className="text-lg text-black">
                <th></th>
                <th>Income Source</th>
                <th>Income Details</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {allIncomes &&
                allIncomes?.map((inc, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{inc.incomeSource}</td>
                    <td> {inc.incomeDetails}</td>
                    <td> {inc.incomeDate ? inc.incomeDate : "Not entered"}</td>
                    <td>{inc.incomeAmount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
