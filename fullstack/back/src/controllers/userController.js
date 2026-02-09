const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "failed",
        data: null,
        error: "User already exists",
      });
    }
    // contraseña segura
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      photo: req.file ? `/uploads/users/${req.file.filename}` : "",
    });

    await newUser.save();

    res.status(201).json({
      status: "succeeded",
      data: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        photo: newUser.photo,
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "User not found",
      });
    }

    // Verificar password
    const validPassword = await bcrypt.compare(password, userDoc.password);
    if (!validPassword) {
      return res.status(401).json({
        status: "failed",
        data: null,
        error: "Invalid credentials",
      });
    }

    // Generar JWT
    const token = jwt.sign({ id: userDoc._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({
      status: "succeeded",
      data: {
        token,
        user: {
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          photo: userDoc.photo || "",
        },
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const userDoc = await User.findById(req.user.id).select('-password');
    if (!userDoc) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "User not found",
      });
    }

    res.status(200).json({
      status: "succeeded",
      data: {
        id: userDoc._id,
        username: userDoc.username,
        email: userDoc.email,
        photo: userDoc.photo || "",
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const photo = req.file ? `/uploads/users/${req.file.filename}` : undefined;

    const updateData = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    if (photo) updateData.photo = photo;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      status: "succeeded",
      data: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        photo: updatedUser.photo || "",
      },
      error: null,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: "failed",
        data: null,
        error: "Email already in use",
      });
    }

    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
};
