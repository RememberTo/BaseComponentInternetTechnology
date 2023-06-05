const db = require('../db')
class UserController{
   async Insert(name, email, pass){
      let tb = `INSERT INTO users(name, email, pas) VALUES ('${name}','${email}','${pass}')`
      db.query(tb)
   }
}

module.exports = new UserController()
