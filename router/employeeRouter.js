import { Router } from "express";
import {allEmployee, employeeByName, employeesByPosition, employeeById} from "../controllers/employees/read.js";
import {createOne, createMany} from "../controllers/employees/create.js";


let routerEmployee = Router();

routerEmployee.get('/allEmployee', allEmployee)
routerEmployee.get('/name/:nameParams', employeeByName)
routerEmployee.get('/position/:position', employeesByPosition)
routerEmployee.get('/id/:idParams', employeeById)
routerEmployee.post('/createOne', createOne)
routerEmployee.post('/createMany', createMany)


export default routerEmployee;



