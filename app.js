
const Blog = require("./database/Model/blogmodel");
const { connectdatabase } = require("./database/database");
const express = require("express")

const app = express();

//nodejs lai form bata aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//database connection function
connectdatabase()

//get API ->/
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "sucess"

    })
})

//get API => /blogs(all blogs)
app.get("/blogs", async (req, res) => {
    //fetching/reading all blogs from Blog model
    const blogs = await Blog.find()
    // checking if blogs contains data or not
    if (blogs.length == 0) {
        res.json({
            status: 404,
            message: "empty blogs",
        })
    }
    else {
        res.json({
            status: 200,
            message: "Blogs fetched successfully",
            data: blogs
        })
    }
})

// get API -> /blogs/:id (single Blog)
app.get("/blogs/:id", async (req, res) => {
    const id = req.params.id
    // alternative        const {id} =req.params
    const blog = await Blog.find({ _id: id })                    // alternative           const blog = await Blog.findById(id)
    if (blog.length == 0) {
        res.json({
            status: 404,
            message: "No blog found with that id"
        })
    }
    else {
        res.json({
            status: 200,
            message: "Blog fetched successfully",
            data: blog
        })
    }

})



// CREATE BLOG API
app.post("/blogs", async (req, res) => {
    console.log(req.body)
    const title = req.body.title;
    const subTitle = req.body.subTitle
    const description = req.body.description

    //alternative(object destructuring)
    // const{title,subtitle,description}= req.body

    //Insert to database logic goes here

    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description

    })


    res.json({
        status: 201,
        message: "blog created successfully"
    })

    //alternative
    //res.status(200).json({
    // message :"blog created successfully"
    // })
})


//UPDATE Blog ApI
app.patch("/blogs/:id",async(req,res)=>{
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description
    //const{title,subTitle,description}= req.body                (alternative way)

    await Blog.findByIdAndUpdate(id,{
        title : title,
        subTitle : subTitle,
        description : description
    })
    res.json({
        status : 200,
        message : "Blog updated succesfully"
    })
})

// DELETE API
app.delete("/blogs/:id",async(req,res)=>{
    const id = req.params.id
    //const{id} = req.params

    await Blog.findByIdAndDelete(id)

    res.json({
        status : 200,
        message : "Blog deleted successfully"
    })

})


app.listen(2000, () => {
    console.log("node js has started at the port 2000")
})