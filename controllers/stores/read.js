import Store from "../../models/Store.js";

let allStore = async (req, res, next) => {
    try {
        let all = await Store.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let storeByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await Store.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
         next(error)
    }
}

let storeByAddress = async (req, res, next) => {
    try {
        let addressQuery = req.params.address;
        console.log(addressQuery);

        let stores = await Store.find({ address: addressQuery }); 

        return res.status(200).json({
            response: stores
        });
    } catch (error) {
        next(error)
    }
};

let storeById = async (req,res,next)=>{
    try {

        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await Store.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {allStore, storeByName, storeByAddress, storeById}; 

