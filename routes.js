const express = require('express');
function eRoutes() {
    const router = express.Router();
    var employee = require('./repository/employee/employeeroutes')(router);    
    return router;
}
module.exports = eRoutes;