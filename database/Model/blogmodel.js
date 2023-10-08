const mongoose = require("mongoose")
const schema = mongoose.Schema

const blogSchema = new schema({
    title :{
        type : String
       
    },
    subTitle :{
        type : String
    },
    description :{
        type : String
    },

},{
    timestamps : true
})

 const Blog = mongoose.model("Blog",blogSchema)
 //alternative
 // module.exports = mongoose.model("Blog",blogSchema)
 module.exports = Blog