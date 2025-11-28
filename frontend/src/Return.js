import React, { useMemo } from "react";
import { useCitiesData } from "./DataHandle.js";

const RANGE_PERCENT = 0.1; // 10% up/down

export default function Return({ yearlyBudget }) {
  const { cities, loading, error } = useCitiesData();

  const matchingCities = useMemo(() => {
    if (!yearlyBudget || !cities.length) return [];

    const minIncome = yearlyBudget * (1 - RANGE_PERCENT);
    const maxIncome = yearlyBudget * (1 + RANGE_PERCENT);

    return cities.filter((city) => {
      const income = city.median_income;
      return income >= minIncome && income <= maxIncome;
    });
  }, [yearlyBudget, cities]);

  if (loading) return <p>Loading city data…</p>;
  if (error) return <p>Failed to load city data.</p>;

  return (
    <div>
      <h2>Cities that match your budget</h2>
      {!yearlyBudget && <p>Enter your budget to see suggestions.</p>}

      {yearlyBudget && matchingCities.length === 0 && (
        <p>No cities found in that income range.</p>
      )}

      <ul>
        {matchingCities.slice(0, 50).map((city) => (
          <li key={city.id}>
            {city.name}, {city.state_code} — Median income: $
            {city.median_income.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
