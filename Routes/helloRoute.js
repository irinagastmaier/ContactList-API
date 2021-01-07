const router = require("express").Router();
const { helloUser } = require("../Controllers/helloController");

router.get("/", helloUser);

module.exports = router;
