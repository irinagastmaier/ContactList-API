const router = require("express").Router();
const { Index } = require("../Controllers/indexController");

router.get("/", Index);

module.exports = router;
