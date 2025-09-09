require("dotenv").config();
const express = require("express");
const cors = require("cors");   // ✅ import cors
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
connectDB();

app.use(cors()); 

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
