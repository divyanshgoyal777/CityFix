const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/gov", require("./routes/governmentRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

app.get("/", (req, res) => {
  res.send("🌐 CityFix API is running securely!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
