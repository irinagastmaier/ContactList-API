const express = require("express");

const app = express();

const setCors = require("./middlewares/security");

const usersRoutes = require("./Routes/usersRoutes");
const indexRoute = require("./Routes/indexRoute");

const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(setCors);

app.use("/users", usersRoutes);
app.use("/", indexRoute);

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
