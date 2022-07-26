const router = require("express").Router();
const {
  addNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/add", addNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
