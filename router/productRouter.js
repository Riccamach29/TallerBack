import { Router } from "express";
import {allProduct, productByName, productByType, productById} from "../controllers/products/read.js";
import {createOne, createMany} from "../controllers/products/create.js";

let routerProduct = Router();

routerProduct.get('/allProduct', allProduct)
routerProduct.get('/name/:nameParams', productByName)
routerProduct.get('/id/:idParams', productById)
routerProduct.get('/type/:type', productByType)
routerProduct.post('/createOne', createOne)
routerProduct.post('/createMany', createMany)


export default routerProduct;