const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/bloggz")

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationDate: String,
    content: String
})

const Post = new mongoose.model("Post", postSchema)

const post1 = new Post({
    title: "React express workflow setup guide",
    author: "John Doe",
    publicationDate: "12/03/2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam id, quasi culpa saepe totam iure laudantium numquam soluta explicabo illum dolorem quas quia sint nulla, voluptate nihil. Nobis repellendus vel quo eius inventore exercitationem quis labore molestiae debitis eveniet!"
}) 
const post2 = new Post({
    title: "How to build design system in figma",
    author: "Jennifer Walter",
    publicationDate: "20/06/2022",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam id, quasi culpa saepe totam iure laudantium numquam soluta explicabo illum dolorem quas quia sint nulla, voluptate nihil. Nobis repellendus vel quo eius inventore exercitationem quis labore molestiae debitis eveniet!"
}) 
const post3 = new Post({
    title: "practical guide to web development using react",
    author: "Mathew Murdock",
    publicationDate: "23/05/2022",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam id, quasi culpa saepe totam iure laudantium numquam soluta explicabo illum dolorem quas quia sint nulla, voluptate nihil. Nobis repellendus vel quo eius inventore exercitationem quis labore molestiae debitis eveniet!"
}) 

const defaultPosts = [post1, post2, post3]

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/api/posts", (req, res) => {
    // res.sendFile(__dirname + "/index.html")
    Post.find((err, posts) => {
        if(posts.length === 0){
            Post.insertMany(defaultPosts, (err) => {
                if(err){
                    console.log(err)
                } else {
                    console.log("default posts inserted successfully")
                }
            })
            res.redirect("/")
        } else {
            res.json(posts)
        }
    })
})

app.get("/api/posts:id", (req, res) => {
    const resPost = Post.findById(req.params.id)
    if(resPost){
        res.json(resPost)
        console.log(resPost)
    } else {
        console.error("post not found")
    }
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server up and running on port: ${PORT}`)
})