import { useEffect, useState } from "react";
import { getHealth } from "../api";

export default function Status() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth);
  }, []);

  if (!health) return <div>Checking...</div>;

  return (
    <div className="container"> 
      <div className="card">
      <h3>System Status</h3>
        </div>
      <p>Backend: {health.backend}</p>
      <p>Database: {health.database}</p>
      <p>LLM: {health.llm}</p>
    </div>
  );
}
