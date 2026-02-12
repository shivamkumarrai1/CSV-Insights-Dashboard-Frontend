import { useEffect, useState } from "react";
import { getReports } from "../api";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports().then(setReports);
  }, []);

  return (
    <div className="container">
          <div className="card">
      <h3>Last Reports</h3>
          </div>
      {reports.map((r) => (
        <div key={r.id} style={{ marginBottom: 15 }}>
          <b>{r.filename}</b>
          <pre>{r.summary}</pre>
        </div>
      ))}
    </div>
  );
}
