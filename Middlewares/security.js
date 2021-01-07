const setCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // *--> global API, for non confidatial data, anyone can send a request
  next();
};

module.exports = setCors;
