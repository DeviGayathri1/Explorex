const express = require("express");
const User = require("../models/User");
const Settings = require("../models/settings.model");

const router = express.Router();

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     // 1️⃣ Check all fields
//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // 2️⃣ Password match
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     // 3️⃣ Check existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // 4️⃣ Create user
//     const user = new User({
//       username,
//       email,
//       password
//     });

//      // Create default settings for user
//     const settings = new Settings({ userId: user._id });
//     await settings.save();

//     await user.save(); // password hashing happens here

//     res.status(201).json({
//       message: "Signup successful",
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email
//       }
//     });

//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 1️⃣ Save user first
    const user = await User.create({
      username,
      email,
      password
    });

    // 2️⃣ Then create settings
    await Settings.create({
      userId: user._id
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        _id: user._id,   // 👈 IMPORTANT
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
// DELETE ACCOUNT
router.delete("/delete/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Delete user settings first
    await Settings.deleteOne({ userId });

    // Delete user
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Account deleted successfully" });

  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

});

