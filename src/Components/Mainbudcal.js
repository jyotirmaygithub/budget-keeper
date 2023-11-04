import React, { useState, useEffect } from "react";
import { UserEntereddata } from "../Usecontext/Context";
// import Datascroll from "./Datascroll";

export default function Mainbudcal() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  console.log(formattedDate);
  


  const [type, settype] = useState("Income");
  const [expense, setexpense] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState(formattedDate);
  const [description, setdescription] = useState("");
  const [balance, setbalance] = useState("");
  const { objectdata, setobjectdata } = UserEntereddata();

  let newdata = {};
  let total;

  useEffect(() => {
    avaliabledata();
  }, []);

  function savedata(e) {
    e.preventDefault();
    if (
      type &&
      expense &&
      amount &&
      date &&
      expense !== "category" &&
      type !== "select a option"
    ) {
      newdata = {
        type: type,
        expense: expense,
        amount: amount,
        date: date,
        description: description,
      };
      if (type === "income") {
        setbalance((total += amount));
      } else {
        setbalance((total -= amount));
      }
      insertingdatalocal(newdata);
      setobjectdata(newdata);
      settype("Income");
      setexpense("");
      setamount("");
      setdate(formattedDate);
      setdescription("");
    } else {
      alert("please fill all fields");
    }
  }
  function insertingdatalocal(newdata) {
    let existdaata = avaliabledata();
    existdaata.push(newdata);
    localStorage.setItem("income-expense", JSON.stringify(existdaata));
  }

  function avaliabledata() {
    let data;
    if (localStorage.getItem("income-expense") === null) {
      data = [];
    } else {
      data = JSON.parse(localStorage.getItem("income-expense"));
    }
    return data;
  }
  console.log(type);
  return (
    <>
      <div className="universal universal-flex-dir main-budget-cal">
        <div className="budget-box">
          <p>Expense Keeper</p>
          <p>Total Balance : {balance}</p>
          <div className="universal universal-flex-dir">
            <div className="universal universal-jus">
              <select
                className="beauty"
                onChange={(e) => settype(e.target.value)}
                value={type}
              >
                {/* <option value="select a option">Select a option</option> */}
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <select
                className="beauty"
                onChange={(e) => setexpense(e.target.value)}
                value={expense}
              >
                {type !== "income" ? (
                  <>
                    <option value="category">Category</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="clothes">Clothes</option>
                    <option value="transportation">Transportation</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="grocery">Grocery</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="miscellaneous">Miscellaneous</option>
                  </>
                ) : (
                  <>
                    <option value="category">Category</option>
                    <option value="salary">Salary</option>
                    <option value="other income">Other Income</option>
                    <option value="investment">Investment</option>
                    <option value="saving">Savings</option>
                    <option value="rental income">Rental Income</option>
                    <option value="bonus">Bonus</option>
                  </>
                )}
              </select>
            </div>
            <div className="universal universal-jus">
              <input
                className="beauty"
                onChange={(e) => setamount(e.target.value)}
                value={amount}
                placeholder="Amount"
                type="number"
              />
              <input
                className="beauty"
                type="date"
                onChange={(e) => setdate(e.target.value)}
                name="expense-data"
                value={formattedDate}
              />
            </div>
            <div className="universal universal-jus">
              <input
                className="beauty description"
                onChange={(e) => setdescription(e.target.value)}
                type="text"
                placeholder="Description"
                value={description}
              />
            </div>
            <div>
              <button className="beauty button" onClick={savedata}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Datascroll/> */}
    </>
  );
}
