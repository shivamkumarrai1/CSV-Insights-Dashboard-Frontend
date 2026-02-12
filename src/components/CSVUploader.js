import Papa from "papaparse";

export default function CSVUploader({ onData }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        const [columns, ...rows] = result.data;
        onData(file.name, columns, rows);
      },
      error: () => alert("Invalid CSV"),
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}
