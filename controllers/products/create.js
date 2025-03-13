import Product from '../../models/Product.js';

let createOne = async(req,res,next)=>{
    try {
        let productInfo = req.body
        console.log(productInfo);

        let createProduct = await Product.create(productInfo)
        return res.status(201).json({
            response: createProduct
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let productInfo = req.body; 
        console.log(productInfo);

        let createProduct = await Product.insertMany(productInfo);
        return res.status(201).json({
            response: createProduct
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
