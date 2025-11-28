// src/Inputs.js
import "./styles.css";
import { useState } from "react";

export default function Inputs({ onSubmit }) {
  const [values, setValues] = useState({
    health: "",
    auto: "",
    dental: "",
    pet: "",
    rent: "",
    utilities: "",
    car: "",
    savings: "",
    groceries: "",
    shopping: "",
    fun: "",
    emergency: ""
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  function handleClick() {
    // Sum all fields as numbers
    const totalMonthly = Object.values(values).reduce((sum, v) => {
      const num = parseFloat(v);
      return sum + (Number.isNaN(num) ? 0 : num);
    }, 0);

    const yIncome = totalMonthly * 12 * 1.169;

    alert("Yearly Income Necessary: " + yIncome.toFixed(2));

    if (onSubmit) {
      onSubmit(yIncome);
    }
  }

  function handleReset() {
    setValues({
      health: "",
      auto: "",
      dental: "",
      pet: "",
      rent: "",
      utilities: "",
      car: "",
      savings: "",
      groceries: "",
      shopping: "",
      fun: "",
      emergency: ""
    });
  }

  return (
    <div className="Inputs">
      <div className="Fields">
        <div id="Container1">
          <h2>Insurance</h2>
          <input
            type="number"
            placeholder="Health"
            id="health"
            value={values.health}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Auto"
            id="auto"
            value={values.auto}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Dental"
            id="dental"
            value={values.dental}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Pet (optional)"
            id="pet"
            value={values.pet}
            onChange={handleChange}
          />
        </div>

        <div id="Container2">
          <h2>Living</h2>
          <input
            type="number"
            placeholder="Rent"
            id="rent"
            value={values.rent}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Utilities"
            id="utilities"
            value={values.utilities}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Car"
            id="car"
            value={values.car}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Savings"
            id="savings"
            value={values.savings}
            onChange={handleChange}
          />
        </div>

        <div id="Container3">
          <h2>Amenities</h2>
          <input
            type="number"
            placeholder="Groceries"
            id="groceries"
            value={values.groceries}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Shopping"
            id="shopping"
            value={values.shopping}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Fun"
            id="fun"
            value={values.fun}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Emergency"
            id="emergency"
            value={values.emergency}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="buttons">
        <button className="submit" id="submit" onClick={handleClick}>
          Submit
        </button>
        <button className="submit" id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
