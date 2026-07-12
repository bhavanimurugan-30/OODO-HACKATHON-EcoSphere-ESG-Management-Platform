import "../styles/Environmental.css";

function Environmental() {
  const transactions = [
    { dept: "Finance", source: "Flight", carbon: "220 kg", date: "12 Jul" },
    { dept: "HR", source: "Electricity", carbon: "95 kg", date: "12 Jul" },
    { dept: "IT", source: "Diesel", carbon: "180 kg", date: "11 Jul" },
  ];

  const factors = [
    { fuel: "Diesel", factor: "2.68 kg/L" },
    { fuel: "Petrol", factor: "2.31 kg/L" },
    { fuel: "Electricity", factor: "0.82 kg/kWh" },
  ];

  return (
    <div className="environment-page">

      <h1>🌿 Environmental Module</h1>

      <div className="env-grid">

        <div className="env-card">
          <h2>Carbon Transactions</h2>

          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Source</th>
                <th>Carbon</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((item, index) => (
                <tr key={index}>
                  <td>{item.dept}</td>
                  <td>{item.source}</td>
                  <td>{item.carbon}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <div className="env-card">

          <h2>Emission Factors</h2>

          <table>

            <thead>
              <tr>
                <th>Fuel</th>
                <th>Factor</th>
              </tr>
            </thead>

            <tbody>

              {factors.map((item, index) => (

                <tr key={index}>
                  <td>{item.fuel}</td>
                  <td>{item.factor}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Environmental;