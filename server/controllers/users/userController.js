const userModel = require("../../models/userModel");
const { hashPassword, comparePassword } = require("../../utils/authBrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");
const shortid = require("shortid");
dotenv.config();

exports.register = async (req, res) => {
  try {
    let reqBody = req.body;
    let { name, email, password } = reqBody;
    if (!name || !email || !password) {
      return res.status(400).send("Please fill all fields");
    } else if (password.length < 6) {
      return res
        .status(400)
        .send("Password must be at least 6 characters long");
    } else {
      let userExist = await userModel.findOne({ email });
      if (userExist) {
        return res.status(400).send("Email already exists");
      } else {
        //hashed password
        const hashedPassword = await hashPassword(password);

        //register
        const user = await userModel.create({
          name,
          email,
          password: hashedPassword,
        });
        console.log("USER CREATED", user);
        return res.json({ ok: true });
      }
    }
  } catch (err) {
    return res.status(400).send("Error. Try again.");
  }
};

//login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email }).exec();
    if (!user) {
      return res.status(400).send("No user found");
    } else {
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(400).send("Incorrect password");
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });

        //return user and taken to client , exclue hashed password
        user.password = undefined;
        //send token in cookie
        res.cookie("token", token, {
          httpOnly: true,
          // secure: true, // only works on https
        });
        //send user as json response
        return res.json(user);
      }
    }
  } catch (err) {
    return res.status(400).send("Error. Try again.");
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    return res.status(400).send("Error. Try again.");
  }
};

//current user is logged

exports.currentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    res.json(user);
  } catch (err) {
    return res.status(400).send("Error. Try again.");
  }
};

//recovery password email
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const shortcode = shortid.generate();
    const user = await userModel.findOneAndUpdate(
      { email: email },
      {
        passwordResetCode: shortcode,
      }
    );

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "no user found",
      });
    }

    //prepare for email

    const resetURL = process.env.RESET_URL;

    const resetUrl = `${resetURL}/${resetToken}`;
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      sendEmail(user.email, message, "password reset request");
      res.status(200).json({
        success: true,
        data: "email send",
      });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(500).json({
        success: false,
        error: "email could not be send",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await userModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "invalid token",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "password updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
