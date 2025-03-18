import Product from "../../models/Product.js";

let allProduct = async (req, res, next) => {
    try {
        let all = await Product.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let productByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await Product.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
       next(error)
    }
}

let productByType = async (req, res, next) => {
    try {
        let typeQuery = req.params.type;
        console.log(typeQuery);

        let products = await Product.find({ type: typeQuery });

        return res.status(200).json({
            response: products
        });
    } catch (error) {
        next(error)
    }
};

let productById = async (req,res,next)=>{
    try {
        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await Product.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {allProduct, productByName, productByType, productById}; 

