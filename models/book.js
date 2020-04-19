const mongoos = require('mongoose')

const bookSchema = new mongoos.Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String
    },
    publishDate:{
        type : Date,
        required : true
    },
    pageCount:{
        type : Number,
        required : true
    },
    createdAt:{
        type : Date,
        required : true,
        default : Date.now
    },
    coverImage: {
        type: Buffer,
        required: true
    },
      coverImageType: {
        type: String,
        required: true
    },
    author:{
        type : mongoos.Schema.Types.ObjectId,
        required : true,
        red : 'Author'
    }
})

module.exports = mongoos.model('Book', bookSchema)