import { useEffect, useState } from "react";

function parseCSV(text) {
  const lines = text.trim().split("\n");
  if (lines.length <= 1) return [];

  const headers = lines[0].split(",").map((h) => h.trim());

  return lines
    .slice(1)
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const values = line.split(",");
      const row = {};

      headers.forEach((header, idx) => {
        row[header] = values[idx] ?? "";
      });

      // Convert numeric columns you care about:
      if (row.median_income !== undefined) {
        row.median_income = Number(row.median_income);
      }

      return row;
    });
}

export function useCitiesData() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/us-cities.csv")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch CSV");
        return res.text();
      })
      .then((text) => {
        const rows = parseCSV(text);

        // Filter to:
        // - type === 'City'
        // - state_code !== 'AK'
        // - has a valid median_income
        const filtered = rows.filter((row) => {
          const isCity = row.type && row.type.toLowerCase() === "city";

          const notAlaska = row.state_code !== "AK";

          const hasIncome =
            typeof row.median_income === "number" &&
            !Number.isNaN(row.median_income) &&
            row.median_income > 0;

          return isCity && notAlaska && hasIncome;
        });

        setCities(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { cities, loading, error };
}
