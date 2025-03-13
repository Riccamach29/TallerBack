import { Router } from "express";
import routerEmployee from "./employeeRouter.js";
import routerProduct from "./productRouter.js";
import routerStore from "./storeRouter.js";


let routerIndex = Router();

routerIndex.use('/employees', routerEmployee);
routerIndex.use('/products', routerProduct);
routerIndex.use('/stores', routerStore);

export default routerIndex;