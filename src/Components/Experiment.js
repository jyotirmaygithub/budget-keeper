import React from "react";
import Datascroll from "./Datascroll";
import Income from "./Income";
import Expense from "./Expense";
import Mainbudgetcal from "./Mainbudcal";
import Alert from "./Alert";

export default function Experiment() {
  return (
    <div>
      <div>
        <Alert />
      </div>
      <div className="universal">
        <Income />
        <div className="universal universal-flex-dir">
          <Mainbudgetcal />
          <Datascroll />
        </div>
        <Expense />
      </div>
    </div>
  );
}
