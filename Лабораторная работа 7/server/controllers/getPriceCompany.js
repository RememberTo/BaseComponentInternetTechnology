const db = require('../db')
class ComController{
    async GetCompany(ima){
        let sl =`SELECT * FROM share WHERE name = '${ima}'`
        return db.query(sl).then(data => { return data } )
    }
}

module.exports = new ComController()