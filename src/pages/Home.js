import { useState } from "react";
import CSVUploader from "../components/CSVUploader";
import DataTable from "../components/DataTable";
import InsightsBox from "../components/InsightsBox";
import { generateInsights, saveReport } from "../api";

export default function Home() {
  const [filename, setFilename] = useState("");
  const [columns, setColumns] = useState(null);
  const [rows, setRows] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const onData = (name, cols, dataRows) => {
    setFilename(name);
    setColumns(cols);
    setRows(dataRows);
    setSummary("");
  };

  const generate = async () => {
    setLoading(true);
    try {
      const res = await generateInsights({ filename, columns, rows });
      setSummary(res.summary);
    } catch {
      alert("Failed to generate insights");
    }
    setLoading(false);
  };

  const save = async () => {
    await saveReport({ filename, summary });
    alert("Saved!");
  };

  return (
    <div className="container">
  <div className="card">
    <h3>Upload CSV</h3>
    <CSVUploader onData={onData} />
  </div>

  <div className="card">
    <h3>Preview</h3>
    <DataTable columns={columns} rows={rows} />
  </div>

  {columns && (
    <div className="card">
       <div style={{ marginTop: 10 }}>
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Insights"}
      </button>
        </div>
    </div>
  )}

  {summary && (
    <div className="card">
      <h3>Insights</h3>
      <InsightsBox summary={summary} />

      <div style={{ marginTop: 10 }}>
        <button onClick={save}>Save Report</button>
      </div>
    </div>
  )}
</div>

  );
}
