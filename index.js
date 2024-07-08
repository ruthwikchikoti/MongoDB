    const express = require("express")
    const mongoose = require("mongoose")
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
    const productSchema = new mongoose.Schema({ 
        product_name: {
            type: String,
            required: true
        },
        product_price: {
            type: Number,
            required: true
        
        },
        isAvailable: {
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true
        }

    })



    const productModel = mongoose.model("products", productSchema)

    app.post('/api/products',async(req,res)=>{
        const body = req.body
        const product =  productModel.create({
            product_name: body.product_name,
            product_price: body.product_price,
            isAvailable: body.isAvailable,
            category: body.category
        
        })

        console.log(product)
        return res.status(201).json({message : "Product created successfully"})
    })

    app.get('/api/products',async(req,res)=>{
        const products = await productModel.find({isAvailable: true})
        return res.json(products)
    }
    )

    app.get('/api/products/:id',async(req,res)=>{
        const product = await productModel.findById(req.params.id)
        return res.json(product)
    }
    )


    app.put('/api/products/:id',async(req,res)=>{
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        return res.json({message : "Product updated successfully"})

    }
    )

    app.delete('/api/products/:id',async(req,res)=>{
        await productModel.findByIdAndDelete(req.params.id)
        return res.json({message : "Product deleted successfully"})
    }
    )





    app.listen(3000, ()=>{
        console.log("Server started")
    }
    )

