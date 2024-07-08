const mongoose = require('mongoose')

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
