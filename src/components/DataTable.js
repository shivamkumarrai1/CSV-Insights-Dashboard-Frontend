export default function DataTable({ columns, rows }) {
  if (!columns) return null;

  return (
      <div className="table-wrapper">
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th key={i}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(0, 10).map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
      </div>
  );
}
