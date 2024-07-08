    const express = require("express")
    const mongoose = require("mongoose")
    const productRoutes = require("./routes/productRoute")

    const app = express()
    require('dotenv').config()

    app.use(express.json())
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log("Error connecting to MongoDB")
        console.log(err)
    }
    ) 


    app.use('/api/products', productRoutes)




    app.listen(3000, ()=>{
        console.log("Server started")
    }
    )

