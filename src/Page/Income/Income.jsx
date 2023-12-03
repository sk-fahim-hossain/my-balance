import { useContext, useRef } from "react";
import Chart from "../../components/Chart/Chart";
import { DataContext } from "../../Provider/DataProvider";

import { useReactToPrint } from "react-to-print";

const Income = () => {
  const { userData, updateUserAccount } = useContext(DataContext);
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const allIncomes = userData?.income?.allIncomes;
  const submitHandleIncome = (event) => {
    event.preventDefault();
    const incomeForm = event.target;
    const incomeSource = incomeForm.incomeSource.value;

    const incomeAmountStr = incomeForm.incomeAmount.value;
    const incomeAmount = parseInt(incomeAmountStr);
    const incomeDetails = incomeForm.incomeDetails.value;
    const incomeDate = incomeForm.incomeDate.value;

    const newIncomeReport = {
      incomeSource,
      incomeDetails,
      incomeDate,
      incomeAmount,
    };
    if (isNaN(incomeAmount)) {
      return alert("Enter a valid number for income amount");
    }

    const newBalance = userData?.income?.incomeBalance + incomeAmount;
    const updatedAllIncomes = [...userData.income.allIncomes, newIncomeReport];
    const updatedAccount = {
      ...userData,
      income: { allIncomes: updatedAllIncomes, incomeBalance: newBalance },
    };
    localStorage.setItem("user-details", JSON.stringify(updatedAccount));
    updateUserAccount(updatedAccount);
    incomeForm.reset();
  };

  return (
    <div className="p-6 bg-slate-200 rounded-3xl m-8 text-black">
      <p className="text-2xl font-bod">Income</p>
      <hr className="mb-4 border-2 border-black mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="grid grid-cols-2 gap-4 h-[150px] ">
            <div className="wallet-balance  p-7 bg-[#0E35FF] text-white rounded-lg">
              <p>
                <small>Wallet Balance</small>
              </p>
              <p className="font-bold text-3xl">
                ${userData?.income?.incomeBalance}
              </p>
            </div>
            <div className="saving-balance p-8 bg-[#0E35FF] text-white rounded-lg">
              <p>
                <small>Saving Balance</small>
              </p>
              <p className="font-bold text-3xl">$200</p>
            </div>
          </div>
          <div className="w-full income-input bg-white mt-4 rounded-lg p-4 drop-shadow-md">
            <form className="w-auto" onSubmit={submitHandleIncome}>
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
                <button className="btn bg-[#0E35FF] border-0">
                  Add Income
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <small className="text-red-700">
            *this chart section is under development
          </small>
          <Chart></Chart>
        </div>
      </div>

      <div className="bg-white p-4 mt-4 rounded-lg">
        <button className="btn" onClick={handlePrint}>
          Print
        </button>
        <table ref={printRef} className="table">
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
  );
};

export default Income;
