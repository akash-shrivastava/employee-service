const employee = require("../controllers/employee.controller");
const { validateRequestAccept, validateRequestContent} = require("../middleware/request.validate.middleware");

module.exports = router => {
    router.post("/employee", validateRequestAccept, validateRequestContent, employee.addEmployee);
    router.delete("/employee", employee.deleteEmployee);
}