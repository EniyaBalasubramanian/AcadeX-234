/*const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Uploaded");
});

// get files
app.get("/files", (req, res) => {
  const files = fs.readdirSync("./uploads");
  res.json(files);
});

// serve files
app.use("/uploads", express.static("uploads"));

app.listen(5000, () => console.log("Server running on port 5000"));*/


const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== FILE UPLOAD SETUP =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// ===== ROUTES =====

// Upload API
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

// Get all files
app.get("/files", (req, res) => {
  const files = fs.readdirSync("./uploads");
  res.json(files);
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// ===== SERVE FRONTEND (VERY IMPORTANT) =====

// Serve React build (dist folder)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route (FIXED)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ===== START SERVER =====

// IMPORTANT: Azure needs this
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

