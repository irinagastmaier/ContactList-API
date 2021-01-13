const express = require("express");

const app = express();

const setCors = require("./Middlewares/security");

const indexRoute = require("./Routes/indexRoute");
const helloRoute = require("./Routes/helloRoute");
const usersRoutes = require("./Routes/usersRoutes");

const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(setCors);

//template Engines
//npm i ejs
//EJS Embedded JS Template
//jade known as PU
app.set("view engine", "ejs")
//send static file from the html (css)
app.use(express.static("public"))

app.use("/", indexRoute);
app.use("/hello", helloRoute);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
  let err = new Error("route not found");
  err.status = 404;
  console.log(err.status);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ success: false, message: err.message });
});

app.listen(PORT, () => console.log("server started on " + PORT + " port"));
