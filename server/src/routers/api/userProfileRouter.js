const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/Profile");
const auth = require('../../middleware/auth');

// @route GET api/profile/me
// @desc Get your own user profile
// @access Private

router.get("/me", auth,async (req, res) => {
  try {
    const userProfile = await UserProfile.findOne({
      _id: req.params.userProfileId,
    });
    if (!userProfile) {
      return res.status(400).json({
        status: "fail",
        msg: "No user found",
      });
    }

    res.status(200).json({
      status: "success",
      msg: "user profile found",
      data: userProfile,
    });
  } catch (error) {
    const err_code = error.err_code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res.status(err_code).json({
      status: "fail",
      msg: error.message || "Internal Server Error",
    });
  }
});

module.exports = router;
