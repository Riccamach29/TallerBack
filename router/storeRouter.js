import { Router } from "express";
import {allStore, storeByName, storeByAddress, storeById} from "../controllers/stores/read.js";
import {createOne, createMany} from "../controllers/stores/create.js";

let routerStore = Router();

routerStore.get('/allStore', allStore)
routerStore.get('/name/:nameParams',storeByName)
routerStore.get('/address/:address',storeByAddress)
routerStore.get('/id/:idParams',storeById);
routerStore.post('/createOne', createOne)
routerStore.post('/createMany', createMany)


export default routerStore;