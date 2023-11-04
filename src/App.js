import React from "react";
import Mainbudgetcal from "./Components/Mainbudcal";
import Datascroll from "./Components/Datascroll";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import { DataInputContext } from "./Usecontext/Context";

function App() {
  return (
    <div className="universal App">
    <DataInputContext>
        <Income/>
      <div className="universal universal-flex-dir">
        <Mainbudgetcal />
        <Datascroll />
      </div>
      <Expense/>
    </DataInputContext>
    </div>
  );
}

export default App;
