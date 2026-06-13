function Meeting() {
  return (
    <div>

      <h1>Meeting Room</h1>

      <div
        style={{
          height:"300px",
          background:"lightgray",
          margin:"20px"
        }}
      >
        Video Area
      </div>

      <button>Mic</button>
      <button>Camera</button>
      <button>Share Screen</button>
      <button>Leave</button>

    </div>
  );
}

export default Meeting;