import Employee from "../../models/Employee.js";

let allEmployee = async (req, res, next) => {
    try {
        let all = await Employee.find();
        return res.status(200).json({
            response: all
        });
    } catch (error) {
       next(error)
    }
}

let employeeByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await Employee.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}
let employeesByPosition = async (req, res, next) => {
    try {
        let positionQuery = req.params.position; // Suponiendo que el parámetro viene en la URL
        console.log(positionQuery);
        
        let employees = await Employee.find({ position: positionQuery }); // Buscar empleados con la posición dada

        return res.status(200).json({
            response: employees
        });
    } catch (error) {
        next(error)
    }
};

let employeeById = async (req,res,next)=>{
    try {

        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await Employee.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {allEmployee, employeeByName, employeesByPosition, employeeById}; 

