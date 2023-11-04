import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { UserEntereddata } from "../Usecontext/Context";
import { Chart as chartjs } from "chart.js/auto";

export default function Income() {
  const [avadata, setavadata] = useState([]);
  const [income ,setincome] = useState(0)
  const { jsondata, objectdata } = UserEntereddata();
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("income-expense"));
    setavadata(data);
  }, [jsondata, objectdata]);

  let saving = 0;
  let salary = 0;
  let other_income = 0;
  let investment = 0;
  let rental_income = 0;
  let bonus = 0;
  let income_total = 0

  if (avadata) {
    avadata.forEach((e) => {
      let store = 0;
      let { type, amount, expense } = e;
      if (type === "income") {
        console.log("value of amount = ", amount);
        store = parseInt(amount);
        if (expense === "other income") {
          other_income += store;
        } else if (expense === "saving") {
          saving += store;
        } else if (expense === "salary") {
          salary += store;
        } else if (expense === "investment") {
          investment += store;
          console.log("enterted investment = ", investment);
        } else if (expense === "rental income") {
          rental_income += store;
        } else if (expense === "bonus") {
          bonus += store;
        }
      }
    });
  }

  // console.log("what is the total value of the total let see = ", total)
  const data = {
    labels: [
      "savings",
      "Salary",
      "Other Income",
      "Investment",
      "Rental Income",
      "Bonus",
    ],
    datasets: [
      {
        label: "Sources of Income",
        data: [saving, salary, other_income, investment, rental_income, bonus],
        backgroundColor: [
          "#0B5345",
          "#52BE80",
          "#28B463",
          "#58D68D",
          "#ABEBC6",
          "#D5F5E3",
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
