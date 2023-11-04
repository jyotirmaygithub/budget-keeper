import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { UserEntereddata } from "../Usecontext/Context";
import { Chart as chartjs } from "chart.js/auto";

export default function Expense() {
  const [avadata, setavadata] = useState([]);
  const { jsondata, objectdata } = UserEntereddata();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("income-expense"));
    setavadata(data);
  }, [jsondata, objectdata]);

  let Rent = 0;
  let Utilities = 0;
  let Clothes = 0;
  let Transportation = 0;
  let Healthcare = 0;
  let Grocery = 0;
  let Shopping = 0;
  let Entertainment = 0;
  let Miscellaneous = 0;

  if (avadata) {
    avadata.forEach((e) => {
      let store = 0;
      let { type, amount, expense } = e;
      if (type === "expense") {
        store = parseInt(amount);
        if (expense === "rent") {
          Rent += store;
        } else if (expense === "utilities") {
          Utilities += store;
        } else if (expense === "clothes") {
          Clothes += store;
        } else if (expense === "transportation") {
          Transportation += store;
        } else if (expense === "healthcare") {
          Healthcare += store;
        } else if (expense === "grocery") {
          Grocery += store;
        } else if (expense === "shopping") {
          Shopping += store;
        } else if (expense === "entertainment") {
          Entertainment += store;
        } else if (expense === "miscellaneous") {
          Miscellaneous += store;
        }
      }
    });
  }
  const data = {
    labels: [
      "Rent",
      "Utilities",
      "Clothes",
      "Transportation",
      "Healthcare",
      "Grocery",
      "Shopping",
      "Entertainment",
      "Miscellaneous",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [Rent,Utilities,Clothes,Transportation,Healthcare,Grocery,Shopping,Entertainment,Miscellaneous],
        backgroundColor: [
          "#990000",
          "#B30000",
          "#CC0000",
          "#E60000",
          "#FF0000",
          "#FF3333",
          "#FF6666",
          "#FF9999",
          "#FFCCCC",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}
