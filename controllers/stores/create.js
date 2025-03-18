import Store from "../../models/Store.js";

let createOne = async(req,res,next)=>{
    try {
        let StoreInfo = req.body
          // Validación de los campos requeridos usando && para comprobar cada campo
          if (!StoreInfo.name || !StoreInfo.address || !StoreInfo.phoneNumber || !StoreInfo.open24) {
            const error = new Error('One or more required fields are missing');
            error.status = 400;
            return next(error);
        }

        console.log(StoreInfo);

        let createStore = await Store.create(StoreInfo)
        return res.status(201).json({
            response: createStore
        })
        
    }catch (error) {
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let StoreInfo = req.body; 
        // Validación de los campos requeridos usando && para comprobar cada campo
        if (!StoreInfo.name || !StoreInfo.address || !StoreInfo.phoneNumber || !StoreInfo.open24) {
            const error = new Error('One or more required fields are missing');
            error.status = 400;
            return next(error);
        }
        
        console.log(StoreInfo);

        let createStore = await Store.insertMany(StoreInfo);
        return res.status(201).json({
            response: createStore
        });
        
    } catch (error) {
        next(error)
    }
};

export {createOne, createMany};
