import express from "express";
import cors from "cors";
import mysql from "mysql2"

const app = express();

// ✅ allow all origins (for development)
app.use(cors());

// ✅ middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"patil01",
  database:"portfolio",
})

db.connect((err)=>{
  if(err){
    console.log("failed to connect database:");
    
  }else{
    console.log("ur database has been connected");
    
  }
})



// ✅ route
// app.post("/contact", (req, res) => {
//   console.log("Received Data:", req.body);
//   res.status(200).json({
//     success: true,
//     message: "Data received successfully",
//   });
// });

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("Received Data:", req.body);

  const sql = `
    INSERT INTO contacts (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({
        success: false,
        message: "Database error ❌",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data saved successfully ✅",
    });
  });
});

// ✅ test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});