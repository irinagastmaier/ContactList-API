const router = require("express").Router();
const { helloUser } = require("../Controllers/helloController");

router.get("/hello", helloUser);

module.exports = router;
