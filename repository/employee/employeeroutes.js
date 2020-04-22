const _employeeRepository = require('./employeerepository');
const dbContext = require('../../Database/dbContext');
module.exports = function (router) {
    const employeeRepository = _employeeRepository();
router.route('/employees');
        
   
}