const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());



app.use("/api/devices", require("./routes/deviceRoutes"));
app.use("/api/config", require("./routes/configRoutes"));
app.use("/api", require("./routes/authRoutes"));


// Health Check
app.get("/", (req, res) => {
  res.send("NetView API is running...");
});

// Routes (add later)
app.use("/api/devices", require("./routes/deviceRoutes"));
app.use("/api/config", require("./routes/configRoutes"));
app.use("/api", require("./routes/authRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
