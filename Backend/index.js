import express from 'express';
import connectDB from './connectDB.js';
import { Users } from './UserSchema.js';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
const PORT = 4201;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to DB once at startup
connectDB();

// POST route to handle signup
app.post('/data', async (req, res) => {
  const {
    name,
    password,
    gender,
    phone,
    email,
    photoUrl,
    address,
    username
  } = req.body;

  console.log("Received:", { name, gender, email, username });

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Normalize gender to match schema enum
    const normalizedGender = gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase();

    const users = new Users({
      name,
      gender: normalizedGender, 
      password: hashedPassword,
      phone,
      photoUrl,
      email,
      address,
      username
    });

    await users.save();
    res.status(201).json({ message: "Record saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save record" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      message: `Welcome back, ${user.name}. Flow with ease 🌿`,
      user
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed. Try again later." });
  }
});

app.listen(PORT, () => {
  console.log("Server is running");
  console.log(`http://localhost:${PORT}`);
});