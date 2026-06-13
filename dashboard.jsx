import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import { PieChart,Pie,Cell,Tooltip,Legend} from 'recharts';  
    function Dashboard() {
        const navigate=useNavigate();
        const data=[{name:"Completed",value:75},
                    {name:"In Progress",value:15},
                    {name: "Pending",value:10}
        ];
        const COLORS=["#4CAF50","#FFC107","#F44336"]

         return (
  <div className="dashboard">
    <h1>Dashboard</h1>

    <div className="dashboard-top">

      {/* LEFT SIDE CARDS */}
      <div className="stats">
        <div className="card">
          <h3>Meetings</h3>
          <p>15</p>
        </div>

        <div className="card">
          <h3>Tasks</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Hours Saved</h3>
          <p>32</p>
        </div>
      </div>

      {/* RIGHT SIDE PIE CHART */}
      <div className="chart-container">
        <h2>Task Progress</h2>

        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx="70%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend wrapperStyle={{paddingLeft:"90px"}} />
        </PieChart>
      </div>

    </div>
    <div className="dashboard-buttons">
    <button onClick={() => navigate("/meeting")}>
        Meetings
    </button>

    <button onClick={() => navigate("/task")}>
        Tasks
    </button>

    <button onClick={() => navigate("/analytics")}>
        Analytics
    </button> 
</div>    
    {/* BOTTOM SECTION */}
    <div className="dashboard-bottom">

      <div className="meetings">
        <h2>Upcoming Meetings</h2>

        <ul>
          <li>Project Review - Tomorrow</li>
          <li>Team Discussion - Friday</li>
        </ul>
      </div>

      <div className="activity">
        <h2>Recent Activity</h2>

        <ul>
          <li>Joined Meeting</li>
          <li>Completed Task</li>
          <li>Shared Screen</li>
        </ul>
      </div>

    </div>
  </div>
);
}
export default Dashboard;