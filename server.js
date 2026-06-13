const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/meeting", (req, res) => {
  res.json({
    meetingId: "INTELL123",
    status: "Active"
  });
});

app.post("/leaveMeeting", (req, res) => {
  res.json({
    success: true,
    message: "Meeting Left Successfully"
  });
});

app.post("/createMeeting", (req, res) => {
  const meetingId = "INTELL" + Math.floor(Math.random() * 10000);

  res.json({
    success: true,
    meetingId
  });
});

app.post("/joinMeeting", (req, res) => {
  const { meetingId } = req.body;

  if (meetingId) {
    res.json({
      success: true,
      message: "Joined Successfully"
    });
  } else {
    res.json({
      success: false,
      message: "Meeting ID Required"
    });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    res.json({
      success: true,
      message: "Login Successful"
    });
  } else {
    res.json({
      success: false,
      message: "Invalid Credentials"
    });
  }
});

// Register Route
app.post("/register", (req, res) => {
  const { fullname, email, password } = req.body;

  res.json({
    success: true,
    message: "Registration Successful"
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});