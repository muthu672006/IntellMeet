import './task.css';
function Task() {
  return (
    <div className="task-page">
  <h1>Task Manager</h1>

  <div className="task-cards">
    <div className="task-card">
      <h3>Dashboard Design</h3>
      <p>Status: In Progress</p>
    </div>

    <div className="task-card">
      <h3>Meeting UI</h3>
      <p>Status: Pending</p>
    </div>

    <div className="task-card">
      <h3>Backend Setup</h3>
      <p>Status: Completed</p>
    </div>
  </div>
</div>
  );
}

export default Task;