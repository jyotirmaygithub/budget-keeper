import React, { useState, useEffect } from "react";
import Income from "../Images/profits.png";
import Expense from "../Images/expenses.png";
import Remove from "../Images/delete_FILL0_wght500_GRAD-25_opsz20.png";
import { UserEntereddata } from "../Usecontext/Context";

export default function Datascroll() {
  const [data, setdata] = useState([]);
  const { objectdata } = UserEntereddata();
  const { jsondata, setjsondata } = UserEntereddata();

  let storedData = JSON.parse(localStorage.getItem("income-expense"));
  useEffect(() => {
    console.log(storedData);
    if (storedData) {
      setdata(storedData);
    }
  }, [objectdata, jsondata]);

  function toremove(e) {
    let idd = e.currentTarget.id;
    let data = JSON.parse(localStorage.getItem("income-expense"));
    data.splice(idd, 1);
    setjsondata(data);
    localStorage.setItem("income-expense", JSON.stringify(data));
  }

  return (
    <>
    {console.log(jsondata)}
     
        <div className="scroll-bar">
          {data.length === 0 ? <h3 className="no-data">No data to render</h3> : data.map((e, index) => {
            let { type, expense, date, description, amount } = e;
            return (
              <>
                <div className="universal image-box" key={index}>
                  {type === "income" ? (
                    <img className="categoray" src={Income} alt="" />
                  ) : (
                    <img className="categoray" src={Expense} alt="" />
                  )}
                  <div>
                    <p>{expense}</p>
                    <div className="universal">
                      <p>{amount} Rs - </p>
                      <p>{date}</p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="remover"
                      id={index}
                      onClick={toremove}
                      src={Remove}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="expense-des">{description}</p>
                </div>
              </>
            );
          })}
        </div>
    </>
  );
}
