import Product from '../../models/Product.js';

let createOne = async(req,res,next)=>{
    try {
        let productInfo = req.body

        // Validación de los campos requeridos usando && para comprobar cada campo
        if (!productInfo.name || productInfo.brand || productInfo.type || productInfo.price) {
            const error = new Error('One or more required fields are missing');
            error.status = 400;
            return next(error);
        }
        console.log(productInfo);

        let createProduct = await Product.create(productInfo)
        return res.status(201).json({
            response: createProduct
        })
        
    }catch (error) {
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let productInfo = req.body; 

        // Validación de los campos requeridos usando && para comprobar cada campo
        if (!productInfo.name || productInfo.brand || productInfo.type || productInfo.price) {
            const error = new Error('One or more required fields are missing');
            error.status = 400;
            return next(error);
        }
        
        console.log(productInfo);

        let createProduct = await Product.insertMany(productInfo);
        return res.status(201).json({
            response: createProduct
        });
        
    } catch (error) {
        next(error)
    }
};

export {createOne, createMany};
