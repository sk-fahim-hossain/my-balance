import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { DataContext } from "../../Provider/DataProvider";

const Loan = () => {
  const [data, setData] = useState(["korim"]);
  const { userData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value + ",";
    setData([...data, name]);
    toast.success("User added succesfully");
  };
  return (
    <div className="m-5">
      <button
        className="btn"
        onClick={() => document.getElementById("modal").showModal()}
      >
        open modal
      </button>
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
                  <span className="label-text">Date</span>
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
              <button className="btn bg-[#0E35FF] border-0">Add Income</button>
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
    </div>
  );
};

export default Loan;
