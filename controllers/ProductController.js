const productModel = require('../models/Product')



exports.createproducts = async (req, res) => {
    const body = req.body
    const product = productModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        isAvailable: body.isAvailable,
        category: body.category
    })
    console.log(product)
    return res.status(201).json({ message: "Product created successfully" })
}



//get 
exports.getallProducts = async (req, res) => {
    const products = await productModel.find({ isAvailable: true })
    return res.json(products)
}

//get by id
exports.getById = async (req, res) => {
    const product = await productModel.findById(req.params.id)
    return res.json(product)
}
//put
exports.updateProduct = async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body)
    return res.json({ message: "Product updated successfully" })

}

//delete
exports.deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id)
    return res.json({ message: "Product deleted successfully" })
}