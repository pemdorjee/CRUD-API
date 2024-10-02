import Product from "../models/product.model.js"


const getallProducts = async(req, res ) => {
    try {
            const products = await Product.find({

            })
            res.status(200).send (products)
    }catch (error){
        res.status(400).send ({
            message: error.message
        })
    }  
}
const getProductbyID = async (req, res ) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).send (product)
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}
const createProduct = async (req, res ) => {
    try {
        const product = await Product.create (req.body)
        res.status (200).json(product)
    }catch(error){
        res.status(400).json ({
            message: error.message
        })
    }
}
const updateProduct = async (req, res ) => {
    try {
        const  id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate (id, req.body);
        if (!updatedProduct){
            return res.status(200).json ({
                Message: "product not found "
            })
        }
        const updatedPro = await Product.findById(id);
        res.status(200).json (updatedPro)
    }catch(error){
        res.status(200).json ({
            message: error.message
        })
    }
}
const deleteProduct  = async (req, res ) => {
    try {
        const  id = req.params.id;
        const updatedProduct = await Product.findByIdAndDelete (id);
        if (!updatedProduct){
            return res.status(200).json ({
                Message: "product not found "
            })
        }
       
        res.status(200).json ({
            message: "product deleted successfully"
        })
    }catch(error){
        res.status(200).json ({
            message: error.message
        })
    }
}
export default  {
    getallProducts,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct
}