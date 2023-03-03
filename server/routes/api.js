const express = require("express");
const router = express.Router();
const userController = require("../controllers/users/userController");

const { authSignIn } = require("../middleware/middlewareIndex");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

//current user is logged
router.get("/current-user", authSignIn, userController.currentUser);

//reset password api
router.post("/forgot-password", userController.forgotPassword);
router.put("/resetpassword/:resetToken", userController.resetPassword);

module.exports = router;
