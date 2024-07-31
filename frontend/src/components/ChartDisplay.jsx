import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { customer_id: "C001", category: "Electronics", purchase_count: 15 },
  { customer_id: "C002", category: "Clothing", purchase_count: 10 },
  { customer_id: "C003", category: "Books", purchase_count: 8 },
  { customer_id: "C004", category: "Home", purchase_count: 5 },
  { customer_id: "C005", category: "Beauty", purchase_count: 3 },
  // ... more data rows
];

const nestedData = [
  {
    customer_id: "C001",
    purchases: [
      { category: "Electronics", date: "2023-07-01", amount: 200 },
      { category: "Electronics", date: "2023-07-05", amount: 150 },
      { category: "Home", date: "2023-07-10", amount: 100 },
    ],
  },
  {
    customer_id: "C002",
    purchases: [
      { category: "Clothing", date: "2023-07-01", amount: 50 },
      { category: "Clothing", date: "2023-07-08", amount: 30 },
      { category: "Books", date: "2023-07-15", amount: 20 },
    ],
  },
  // ... more nested data rows
];

const ChartDisplay = () => {
  const [loading, setLoading] = useState(true);
  const props = useSpring({ opacity: loading ? 0 : 1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <animated.div style={props} className="card">
      <h2>Purchase Behavior</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="customer_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="purchase_count" fill="#007aff" />
        </BarChart>
      )}
    </animated.div>
  );
};

export default ChartDisplay;
