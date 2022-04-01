const router = require("express").Router();
const { getEmployees, createEmployee, deleteEmployee } = require("../controllers/employees");

router.route("/")
    .get(getEmployees)
    .post(createEmployee);
router.route("/deleteUser/:id")
    .delete(deleteEmployee)

module.exports = router;