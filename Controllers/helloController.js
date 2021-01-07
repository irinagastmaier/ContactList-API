exports.helloUser = (req,res, next) => {
    res.render("hello", {name: "Jane"})// in the future the name needs to be dynamic
  }
  