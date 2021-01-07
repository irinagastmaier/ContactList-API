const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./Model/db.json"); // here needs the exact path, otherwise will create the json file outside the folder.
const db = lowdb(adapter);

//const axios = require('axios');

/*axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
  console.log(res.data.id);
  console.log(res.data.name);
})
.catch(err => {
  console.log(err);
}); */

module.exports=db

