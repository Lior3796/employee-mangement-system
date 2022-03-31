const Employee = require("../models/Employee");

exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();
        console.log("In the employees controller")
        res.status(200).json({ success: true, data: employees, count: employees.length });
    } catch (error) {
        res.status(500).json({ success: false, error });

    }


}

exports.createEmployee = async (req, res, next) => {
    try {

        const employees = await Employee.create(req.body);
        res.status(201).json({ success: true, data: employees, count: employees.length });
    } catch (error) {
        res.status(500).json({
            success: false, error: error.message
        });

    }
}