const mongoos = require('mongoose')

const authorSchema = new mongoos.Schema({
    name:{
        type : String,
        required : true
    }
})

module.exports = mongoos.model('Author', authorSchema)