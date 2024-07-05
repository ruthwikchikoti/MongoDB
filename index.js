const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://chikotiruthwik:2O8YVH5Rjaw2iN9a@cluster0.3okzsid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error connecting to MongoDB")
    console.log(err)
}
)   




const app = express()

app.listen(3000, ()=>{
    console.log("Server started")
}
)

