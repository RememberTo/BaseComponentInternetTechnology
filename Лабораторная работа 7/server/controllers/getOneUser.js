const db = require('../db')
class UsController{
    async GetLastUser(){
        return db.query("SELECT * FROM (SELECT MAX(id) FROM users) s, users f WHERE s.id = f.id").then(data => { return data } )
    }
}

module.exports = new UsController()