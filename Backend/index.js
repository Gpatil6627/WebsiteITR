import express from 'express';
import session from 'express-session';
import connectDB from './connectDB.js';
import { Users } from './UserSchema.js';
import bcrypt from 'bcrypt';
import cors from 'cors';
const app = express();
const PORT = 4201;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(session({
  secret: 'your_super_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,         
    httpOnly: true,        
    maxAge: 1000 * 60 * 60 * 24 
  }
}));
app.get("/wishlist", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const wishlistItems = await Wishlist.find({ userId: req.session.userId });
    res.json(wishlistItems);
  } catch (err) {
    console.error("Wishlist fetch error:", err);
    res.status(500).json({ message: "Error fetching wishlist" });
  }
});

app.delete("/wishlist/:name", async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: "Not logged in" });

  try {
    await Wishlist.deleteOne({ userId: req.session.userId, name: req.params.name });
    res.json({ message: "Removed from wishlist" });
  } catch (err) {
    console.error("Remove wishlist error:", err);
    res.status(500).json({ message: "Failed to remove from wishlist" });
  }
});

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

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

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
    console.error(err);
    res.status(500).json({ error: "Failed to save record" });
  }
});

// ✅ Login Route 
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

    // Store session data
    req.session.userId = user._id;
    req.session.name = user.name;

    res.status(200).json({
      message: `Welcome back, ${user.name}. Flow with ease 🌿`,
      name: user.name
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed. Try again later." });
  }
});

// ✅ Profile Route — Check Session
app.get('/profile', (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ name: req.session.name });
  } else {
    res.status(401).json({ error: "Not logged in" });
  }
});
app.get('/profile/details', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    const user = await Users.findById(req.session.userId).select('-password'); // exclude password
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      gender: user.gender,
      phone: user.phone,
      address: user.address,
      username: user.username,
      photoUrl: user.photoUrl
    });
  } catch (err) {
    console.error("Profile details fetch error:", err);
    res.status(500).json({ error: "Failed to fetch profile details" });
  }
});
// ✅ Logout Route — Destroy Session
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.clearCookie('connect.sid'); // name of the session cookie
    res.json({ message: 'Logged out successfully' });
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});