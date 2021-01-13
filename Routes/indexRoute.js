const router = require("express").Router();
const { Index, Login } = require("../Controllers/indexController");

router.get("/", Index);
router.get("/login", Login)

module.exports = router;


