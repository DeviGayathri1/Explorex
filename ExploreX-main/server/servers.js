const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const ticketRoutes = require("./routes/ticketRoutes");
const authRoutes = require("./routes/auth");
const tripRoutes = require("./routes/triproute");
const nearbyRoutes = require("./routes/nearby.routes");
const favoriteRoutes = require("./routes/favorites.routes");
const settingsRoutes = require("./routes/settings.routes");
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/trip", require("./routes/triproute"));
app.use("/api/nearby", require("./routes/nearby.routes"));
app.use("/api/recommended", require("./recommended/recommended.routes"));
app.use("/api/chat", require("./chatbot/chatbot.routes"));
app.use("/api/favorites", require("./routes/favorites.routes"));
app.use("/api/settings", require("./routes/settings.routes"));
app.use("/api/settings", settingsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log("🚀 Server running on port 5000"));



