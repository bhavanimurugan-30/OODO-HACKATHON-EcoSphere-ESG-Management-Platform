import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Environmental.css";

function EmissionFactors() {

  const factors = [
    { id: 1, fuel: "Diesel", factor: "2.68 kg/L", unit: "Litre" },
    { id: 2, fuel: "Petrol", factor: "2.31 kg/L", unit: "Litre" },
    { id: 3, fuel: "Electricity", factor: "0.82 kg/kWh", unit: "kWh" },
    { id: 4, fuel: "LPG", factor: "1.50 kg/kg", unit: "kg" },
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <div className="page-header">

            <h1>Emission Factors</h1>

            <button className="add-btn">

              + Add Factor

            </button>

          </div>

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Fuel</th>
                <th>Factor</th>
                <th>Unit</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {factors.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.fuel}</td>

                  <td>{item.factor}</td>

                  <td>{item.unit}</td>

                  <td>

                    <button className="edit-btn">
                      Edit
                    </button>

                    <button className="delete-btn">
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default EmissionFactors;