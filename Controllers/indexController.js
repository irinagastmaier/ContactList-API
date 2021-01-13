const path = require("path")

exports.Index = (request, response) => {
    console.log("I am Main Server Route");
    console.log(path.resolve(__dirname,"../views/index.html"))
    let users = ["Joseph", "John", "Jane"];
    let login = false;
    //use to send static html file to the client
    //  response.sendFile(path.resolve(__dirname,"../views/index.html"))

    //use to send dynamic html file to the client --> when use the view engine
    response.render("index", {users, login}) //need to pass an object as dynamic data to send it and display the value on index
    // Display dynamic data in index.ejs
    // <% - include("./partials/header")(file)- %>
    // <% condition (if else, switch)%>
    // <%= display value %>  
  } 

  exports.Login = (req, res) => {
    res.render(Login)
  }