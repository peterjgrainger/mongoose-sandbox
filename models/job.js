const mongoose = require("mongoose");
const conn = mongoose.createConnection('mongodb://localhost/jobdb');

const JobSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    code: String,
    gender: String,
  },
  { timestamps: true }
);

module.exports = conn.model("Job", JobSchema, "jobs");