import React from "react";
import Chart from "../../components/Chart/Chart";

const Cost = () => {
  return (
    <div className="p-6 bg-slate-200 rounded-3xl m-8 text-black">
      <p className="text-2xl font-bod">Cost</p>
      <hr className="mb-4 border-2 border-black mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="grid grid-cols-2 gap-4 h-[150px] ">
            <div className="wallet-balance  p-7 bg-[#0E35FF] text-white rounded-lg">
              <p>
                <small>Wallet Balance</small>
              </p>
              <p className="font-bold text-3xl">$2200</p>
            </div>
            <div className="saving-balance p-8 bg-[#0E35FF] text-white rounded-lg">
              <p>
                <small>Saving Balance</small>
              </p>
              <p className="font-bold text-3xl">$200</p>
            </div>
          </div>
          <div className="w-full income-input bg-white mt-4 rounded-lg p-4 drop-shadow-md">
            <form className="w-auto">
              <div className="grid grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Cost For</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cost For"
                    className="input input-bordered"
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
                    className="input input-bordered"
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
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#0E35FF] border-0">Cost</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Chart></Chart>
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg">
        <p className="p-2 bg-slate-100 rounded-lg my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="p-2 bg-slate-100 rounded-lg my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="p-2 bg-slate-100 rounded-lg my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="p-2 bg-slate-100 rounded-lg my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="p-2 bg-slate-100 rounded-lg my-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Cost;
