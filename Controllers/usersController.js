const db = require("../Model/db");

exports.getSingleUser = (req, res, next) => {
  let idParam = parseInt(req.params.id);
  let user = db.get("users").find({ id: idParam }).value();
  if (user) {
    res.json({ success: true, user: user });
  } else {
    let error = new Error("user not found");
    error.status = 404;
    next(error);
  }
};

exports.getAllUsers = (req, res) => {
  let users = db.get("users").sortBy("id").value();
  console.log(users);
  res.json({ users: users });
};

exports.addNewUser = (req, res) => {
  console.log(req.body);
  db.get("users").push(req.body).write();
  res.json({ success: true, message: "user added" });
};

exports.updateUser = (req, res) => {
  console.log(req.params);
  let idParam = parseInt(req.params.id);
  db.get("users").find({ id: idParam }).assign(req.body).write();
  res.json({ success: true, message: "user updated" });
};

/* MongoDB --> https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656256-complete-the-crud-with-update-and-delete
exports.updateInfo = (req, res) => {
  let idParam = parseInt(req.params.id);
  const info = new Info({ _id: idParam, name: req.body.name, username: req.body.username, email: req.body.email });
  Info.updateOne({_id: req.params.id}, info).then(
    () => {
      res.status(201).json({
        success: true,
        message: 'info updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
*/
exports.deleteUser = (req, res) => {
  let idParam = parseInt(req.params.id);
  db.get("users").remove({ id: idParam }).write();

  res.json({ success: true, message: "user deleted" });
};

exports.deleteAllUsers = (req, res) => {
  db.get("users").remove().write();
  res.json({ success: true, message: "all users deleted" });
};


//200 — OK, The request was successful
//201 — CREATED, A new resource object was successfully created
//404 — NOT FOUND, The requested resource could not be found
//400 —BAD REQUEST, The request was malformed or invalid
//500 — INTERNAL SERVER ERROR, Unknown server error has occurred