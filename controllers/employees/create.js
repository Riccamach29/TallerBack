import Employee from "../../models/Employee.js";

let createOne = async (req, res, next) => {
    try {
        let employeeInfo = req.body;

        // Validación de los campos requeridos usando && para comprobar cada campo
        if (!employeeInfo.name || !employeeInfo.position || !employeeInfo.salary) {
            const error = new Error('One or more required fields are missing');
            error.status = 400;
            return next(error);
        }

        console.log(employeeInfo);

        let createEmployee = await Employee.create(employeeInfo);
        return res.status(201).json({
            response: createEmployee
        });
        
    } catch (error) {
        next(error);
    }
};


let createMany = async (req, res, next) => {
    try {
        let employeeInfo = req.body;

        // Verificamos que todos los campos requeridos estén presentes en cada empleado
        for (let employee of employeeInfo) {
            if (!employee.name || !employee.position || !employee.salary) {
                const error = new Error('One or more required fields are missing');
                error.status = 400;
                return next(error); // Detenemos la ejecución si falta algún campo
            }
        }

        console.log(employeeInfo);

        let createdEmployees = await Employee.insertMany(employeeInfo);
        return res.status(201).json({
            response: createdEmployees
        });
        
    } catch (error) {
        next(error);
    }
};


export {createOne, createMany};
