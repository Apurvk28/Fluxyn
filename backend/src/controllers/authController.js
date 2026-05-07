const User = require('../models/User');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      inviteCode,
    } = req.body;

    // CHECK INVITE CODE
    if (
      inviteCode !== process.env.INVITE_CODE
    ) {
      return res.status(400).json({
        message: 'Invalid Invite Code',
      });
    }

    // CHECK IF USER EXISTS
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    // RESPONSE
    res.json({
      token,

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Server Error',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // FIND USER
    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid Credentials',
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid Credentials',
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    // RESPONSE
    res.json({
      token,

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Server Error',
    });
  }
};