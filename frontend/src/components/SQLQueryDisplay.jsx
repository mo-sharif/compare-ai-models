import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const SQLQueryDisplay = () => {
  const [loading, setLoading] = useState(true);
  const props = useSpring({ opacity: loading ? 0 : 1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <animated.div style={props} className="card">
      <h2>SQL Query</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{`SELECT customer_id, category, COUNT(*) as purchase_count
FROM purchases
GROUP BY customer_id, category
ORDER BY purchase_count DESC;`}</pre>
      )}
    </animated.div>
  );
};

export default SQLQueryDisplay;
