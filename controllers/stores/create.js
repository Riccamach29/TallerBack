import Store from "../../models/Store.js";

let createOne = async(req,res,next)=>{
    try {
        let StoreInfo = req.body
        console.log(StoreInfo);

        let createStore = await Store.create(StoreInfo)
        return res.status(201).json({
            response: createStore
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let StoreInfo = req.body; 
        console.log(StoreInfo);

        let createStore = await Store.insertMany(StoreInfo);
        return res.status(201).json({
            response: createStore
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
