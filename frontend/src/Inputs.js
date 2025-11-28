import "./styles.css";
import { useState } from "react";

export default function Inputs() {
  const [view, setView] = useState(false);
  let healthI = parseInt(document.getElementById("health").value);
  let autoI = parseInt(document.getElementById("auto").value);
  let dentalI = parseInt(document.getElementById("dental").value);
  let petI = parseInt(document.getElementById("pet").value);
  let rentI = parseInt(document.getElementById("rent").value);
  let utilitiesI = parseInt(document.getElementById("utilities").value);
  let carI = parseInt(document.getElementById("car").value);
  let savingsI = parseInt(document.getElementById("savings").value);
  let groceriesI = parseInt(document.getElementById("groceries").value);
  let shoppingI = parseInt(document.getElementById("shopping").value);
  let funI = parseInt(document.getElementById("fun").value);
  let emergencyI = parseInt(document.getElementById("emergency").value);
  let yIncome =
    (healthI +
      autoI +
      dentalI +
      petI +
      rentI +
      utilitiesI +
      carI +
      savingsI +
      groceriesI +
      shoppingI +
      funI +
      emergencyI) *
    12 *
    1.169;
  function handleClick() {
    setView(true);
    alert("Yearly Income Necessary: " + yIncome);
  }
  return (
    <div className="Inputs">
      <div className="Fields">
        <div id="Container1">
          <h2>Insurance</h2>
          <input type="text" placeholder="Health" id="health"></input>
          <br></br>
          <input type="text" placeholder="Auto" id="auto"></input>
          <br></br>
          <input type="text" placeholder="Dental" id="dental"></input>
          <br></br>
          <input type="text" placeholder="Pet (optional)" id="pet"></input>
        </div>
        <div id="Container2">
          <h2>Living</h2>
          <input type="text" placeholder="Rent" id="rent"></input>
          <br></br>
          <input type="text" placeholder="Utilities" id="utilities"></input>
          <br></br>
          <input type="text" placeholder="Car" id="car"></input>
          <br></br>
          <input type="text" placeholder="Savings" id="savings"></input>
        </div>
        <div id="Container3">
          <h2>Amenities</h2>
          <input type="text" placeholder="Groceries" id="groceries"></input>
          <br></br>
          <input type="text" placeholder="Shopping" id="shopping"></input>
          <br></br>
          <input type="text" placeholder="Fun" id="fun"></input>
          <br></br>
          <input type="text" placeholder="Emergency" id="emergency"></input>
        </div>
      </div>
      <div className="buttons">
        <button className="submit" id="submit" onClick={handleClick}>
          Submit
        </button>
        <button
          className="submit"
          id="reset"
          onclick={function resetClick() {
            setView(false);
            document.getElementById("health").value = "";
            document.getElementById("auto").value = "";
            document.getElementById("dental").value = "";
            document.getElementById("pet").value = "";
            document.getElementById("rent").value = "";
            document.getElementById("utilities").value = "";
            document.getElementById("car").value = "";
            document.getElementById("savings").value = "";
            document.getElementById("groceries").value = "";
            document.getElementById("shopping").value = "";
            document.getElementById("fun").value = "";
            document.getElementById("emergency").value = "";
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
