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

router.post("/forgotpassword", forgotpassword);

router.post("/notifyuser", notifyUser);

router.put("/resetpassword", resetpassword);

router.post("/registeruser", registerUser);

router.get("/", get);

router.get("/get/:id", getById);

router.put("/update/:id", updateById);

router.delete("/delete/:id", deleteById);

module.exports = router;
