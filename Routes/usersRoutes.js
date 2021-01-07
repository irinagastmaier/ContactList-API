const router = require("express").Router();
const {
  getSingleUser,
  getAllUsers,
  addNewUser,
  updateUser,
  //updateInfo,
  deleteUser,
  deleteAllUsers,
} = require("../Controllers/usersController"); // here can add one by one by crtl+shift

//when is targeting a specific user the path is /:id, when is all users will be /. Instead of the id, can use other variable, such as name.

router.get("/:id", getSingleUser);

router.get("/", getAllUsers);

router.post("/", addNewUser);

router.patch("/:id", updateUser);

//router.put("/:id", updateInfo); --> MongoDB

router.delete("/", deleteAllUsers);

router.delete("/:id", deleteUser);

module.exports = router;

//PATCH - partial update
//PUT - completely overwrite 
