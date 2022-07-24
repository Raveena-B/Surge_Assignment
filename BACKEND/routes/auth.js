const router = require("express").Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  registerUser,
  get,
  getById,
  updateById,
  deleteById,
  notifyUser,
} = require("../controllers/auth");

//bellow routes map the controllers
router.post("/register", register); // call the auth in controllers

router.post("/login", login);

// router.route("/forgotpassword").post(forgotpassword);

// router.route("/notifyuser").post(notifyUser);

// router.route("/resetpassword/:resetToken").put(resetpassword);

// router.route("/registeruser").post(registerUser);

// router.route("/").get(get);

// router.route("/get/:id").get(getById);

// router.route("/update/:id").put(updateById);

// router.route("/delete/:id").delete(deleteById);

module.exports = router;
