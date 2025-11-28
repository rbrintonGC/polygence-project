import "./styles.css";
import { useState } from "react";
import Inputs from "./Inputs";
import Return from "./Return";

export default function App() {
  const [yearlyBudget, setYearlyBudget] = useState(0);

  return (
    <div>
      <div className="App">
        <h1>BUDGET YOUR LIFE</h1>
        <h2>
          Input monthly budgets in the boxes below to begin. Put '0' for ignored
          fields.
        </h2>
        <h2>V</h2>
      </div>

      <Inputs onSubmit={setYearlyBudget} />
      <Return yearlyBudget={yearlyBudget} />
    </div>
  );
}
