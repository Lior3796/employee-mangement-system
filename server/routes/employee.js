const router = require("express").Router();
const { getEmployees, createEmployee } = require("../controllers/employees");

router.route("/")
    .get(getEmployees)
    .post(createEmployee);
module.exports = router;