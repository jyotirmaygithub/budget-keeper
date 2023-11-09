import React from "react";
import Mainbudgetcal from "./Components/Mainbudcal";
import Datascroll from "./Components/Datascroll";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import Experiment from "./Components/Experiment";
import { DataInputContext } from "./Usecontext/Context";

function App() {
  let storeddata = JSON.parse(localStorage.getItem("income-expense"));
  console.log(storeddata);
  return (
    <div className="universal App">
      <DataInputContext>
        {/* <Income/>
      <div className="universal universal-flex-dir">
        <Mainbudgetcal />
        <Datascroll />
      </div>
      <Expense/> */}
        <Experiment />
      </DataInputContext>
    </div>
  );
}

export default App;
