const { connectdatabase } = require("./database/database");

const app = require("express")();


//database connection function
connectdatabase()



//get API ->/
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "sucess"

    })
})




app.listen(2000,()=>{
    console.log("node js has started at the port 2000")
})