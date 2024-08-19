// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb+srv://damonitor:dam123@cluster0.t8ra2vx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema for form data
const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  otherNames: { type: String, required: true },
  idNumber: { type: String, required: true },
  course: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

// Create a model based on the schema
const Form = mongoose.model('Form', formSchema);

// POST route to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
