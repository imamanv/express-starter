const express = require("express");
const router = express.Router();
const { people } = require("../../data");
const changePeople = require("../controllers/changePeople");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
router.post("/", (req, res) => {
  if (req.body.name) {
    return res.status(200).json({ success: true, person: req.body.name });
  }
  res.status(401).json({ success: false, msg: "Please enter a name first" });
});

router.put("/:id", changePeople);

module.exports = router;
