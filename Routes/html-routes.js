const path = require("path");
const router = require("express").Router()

// GET routing to notes.html
router.get("/notes", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET routing to index.html
router.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;