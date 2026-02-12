export default function InsightsBox({ summary }) {
  if (!summary) return null;

  const copy = () => navigator.clipboard.writeText(summary);

  const download = () => {
    const blob = new Blob([summary], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "report.txt";
    a.click();
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Insights</h3>
      <pre>{summary}</pre>
      <button onClick={copy}>Copy</button>
      <button onClick={download}>Download</button>
    </div>
  );
}
