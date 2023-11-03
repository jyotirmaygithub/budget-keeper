import React from "react";
import Mainbudgetcal from "./Components/Mainbudcal";
import Datascroll from "./Components/Datascroll";
import { DataInputContext } from "./Usecontext/Context";

function App() {
  return (
    <DataInputContext>
      <div className="universal App universal-flex-dir">
        <Mainbudgetcal />
        <Datascroll />
      </div>
    </DataInputContext>
  );
}

export default App;
