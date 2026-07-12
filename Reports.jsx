import "../styles/Page.css";

function Reports() {
  return (
    <div className="page">
      <h1>📊 Reports</h1>

      <div className="card">
        <h3>ESG Report</h3>
        <p>Download ESG performance reports.</p>
        <button>Download PDF</button>
      </div>

      <div className="card">
        <h3>Carbon Report</h3>
        <p>View carbon emission summary.</p>
        <button>Download Excel</button>
      </div>

      <div className="card">
        <h3>CSR Report</h3>
        <p>Employee participation and CSR activities.</p>
        <button>Export CSV</button>
      </div>
    </div>
  );
}

export default Reports;