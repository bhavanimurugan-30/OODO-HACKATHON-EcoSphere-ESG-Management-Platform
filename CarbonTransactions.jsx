import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Environmental.css";

function CarbonTransactions() {

  const transactions = [

    {
      id:1,
      department:"Finance",
      source:"Flight",
      carbon:"220 kg",
      date:"12 Jul"
    },

    {
      id:2,
      department:"HR",
      source:"Electricity",
      carbon:"95 kg",
      date:"11 Jul"
    },

    {
      id:3,
      department:"IT",
      source:"Diesel",
      carbon:"180 kg",
      date:"10 Jul"
    }

  ];

  return (

    <div className="dashboard">

      <Sidebar/>

      <div className="main">

        <Navbar/>

        <div className="content">

          <div className="page-header">

            <h1>Carbon Transactions</h1>

            <button className="add-btn">

              + Add Transaction

            </button>

          </div>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Department</th>

                <th>Source</th>

                <th>Carbon</th>

                <th>Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((item)=>(

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.department}</td>

                  <td>{item.source}</td>

                  <td>{item.carbon}</td>

                  <td>{item.date}</td>

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

export default CarbonTransactions;