import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Sustainability.css";

function SustainabilityGoals() {

  const goals = [

    {
      title: "Reduce Carbon Emission",
      target: 1000,
      current: 720,
      progress: 72,
    },

    {
      title: "Renewable Energy Usage",
      target: 100,
      current: 65,
      progress: 65,
    },

    {
      title: "Tree Plantation",
      target: 500,
      current: 340,
      progress: 68,
    },

  ];

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <h1>Sustainability Goals</h1>

          <div className="goal-grid">

            {goals.map((goal, index) => (

              <div className="goal-card" key={index}>

                <h2>{goal.title}</h2>

                <p>

                  Target : {goal.target}

                </p>

                <p>

                  Current : {goal.current}

                </p>

                <div className="progress">

                  <div
                    className="progress-fill"
                    style={{ width: `${goal.progress}%` }}
                  ></div>

                </div>

                <h3>

                  {goal.progress}%

                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default SustainabilityGoals;