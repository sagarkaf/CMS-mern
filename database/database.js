const mongoose = require("mongoose")


exports.connectdatabase = async()=>{
//connecting to database
// wait until connected to database
  await mongoose.connect("mongodb+srv://sakaf:sakaf@cluster0.wjstiof.mongodb.net/?retryWrites=true&w=majority")
    console.log("database connected succesfully")
}