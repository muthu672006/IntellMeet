import './App.css';
import Login from './Login.jsx';
import Register from './register.jsx';
import Dashboard from './dashboard.jsx';
import Meeting from './meeting.jsx';
import Task from './task.jsx';
import Analytics from './analytics.jsx';
import { useNavigate } from 'react-router-dom';

import { Routes,Route,Link } from 'react-router-dom';
function App() {
  return(
      <Routes>
 <Route
      path='/'
      element={
        <>
      <nav className='navbar'>
        <h2>IntellMeet</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
          </div>
      </nav>
    
    <div className="container">
      <h1>IntellMeet</h1>

      <h3>AI-Powered Enterprise Meeting Platform</h3>

      <Link to="/meeting">
      <button>Join Meeting</button> 
      </Link>
      <Link to="/meeting">
      <button>Create Meeting</button>
      </Link>
      
      
       <div className="features" id= "features">
        <h2>Features</h2>

       <div className="feature-grid">

        <div className="card">
          <h3>Video Meetings</h3>
          <p>Conduct HD meetings with your team.</p>
        </div>

        <div className="card">
          <h3>AI Summaries</h3>
          <p>Automatically generate meeting notes.</p>
        </div>

        <div className="card">
          <h3>Team Collabration</h3>
          <p>Work together in teal time.</p>
        </div>
        
        <div className="card">
          <h3>Task Management</h3>
          <p>Track action item after meetings.</p>
        </div>
        <div id="meetings"className="meetings">
          <h2>Meetings</h2>
        
        <div className="card">
          <h3>Weekly Team Sync</h3>
          <p>Next Meeting:Tommorrow 10:00AM</p>
        </div>

        <div className="card">
          <h3>Project Review</h3>
          <p>Next Meeting:Friday 2:00PM</p>
        </div>
        </div>
       </div>
      </div>
    </div>
      </>
        }
       />
       
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/meeting" element={<Meeting/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
       </Routes>
      
  );
}

export default App;

