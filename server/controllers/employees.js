const Employee = require("../models/Employee");

exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();
        console.log(employees)
        res.status(200).json({ success: true, data: employees, count: employees.length, message: "Success" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot get employees" });

    }
}



exports.createEmployee = async (req, res, next) => {
    try {
        const newEmployee = await Employee.find({ id: req.body });
        if (!newEmployee.length) {
            res.status(301).json({ success: false, data: {}, message: "ID MUST BE UNIQE" });
            return;
        }

        const employees = await Employee.create(req.body);
        res.status(201).json({ success: true, data: employees, count: employees.length, message: "Employee added successfully" });
    } catch (error) {
        res.status(500).json({
            success: false, message: "Cannot add employee"
        });

    }
}
exports.deleteEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.find({ id: Number(req.params.id) });
        if (!employee) return res.status(400).json({ success: false, data: {}, message: "No employee found" });
        await Employee.findByIdAndDelete(employee[0]._id);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: "Cannot delete employee" });
    }
}
