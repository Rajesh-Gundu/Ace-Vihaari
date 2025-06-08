// app.js
const db = require('./models/db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
dotenv.config();

const authRoutes = require('./routes/authRoute');
const dashboardRoutes = require('./routes/dashboardRoute');
const profileRoutes = require('./routes/profileRoute');
const leaderboardRoutes = require('./routes/leaderboardRoute');
const notificationRoutes = require('./routes/notificationsRoute');
const notesRoutes = require('./routes/notesRoute');
const codingstatsRoutes = require('./routes/codingstastsRoute');
const studentDataRoutes = require('./routes/studentDataRoute');

const app = express();

app.use(cors({
  origin: true,// replace with frontend URL
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/leaderboard',leaderboardRoutes);
app.use('/api/notifications',notificationRoutes);
app.use('/api/notes',notesRoutes);
app.use('/api/codingstats',codingstatsRoutes);
app.use('/api/studentData',studentDataRoutes);



const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("AceVihaari backend running.");
});
module.exports = app;