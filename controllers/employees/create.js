import Employee from "../../models/Employee.js";

let createOne = async(req,res,next)=>{
    try {
        let employeeInfo = req.body
        console.log(employeeInfo);

        let createEmployee = await Employee.create(employeeInfo)
        return res.status(201).json({
            response: createEmployee
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let employeeInfo = req.body; 
        console.log(employeeInfo);

        let createdEmployees = await Employee.insertMany(employeeInfo);
        return res.status(201).json({
            response: createdEmployees
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
