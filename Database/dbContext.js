
const _employeeRepository = require('../repository/employee/employeerepository');
// var dbConnect = require('./connect').connect();
const employeerepository = _employeeRepository();

var config = {
    server: 'NAMMY-PC\\NAMMYMSSQLSERVER',
    database: 'Company',
    port: 1433,
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

function loadSqldata(objSheet1)
{
    employeerepository.LoadSQLTable(objSheet1);
}

function spPostExecute(qry, params, callback) {
    var newdata = [];
request = new Request(qry, function (err, rowCount) {
        utility.sendDbResponse(err, rowCount, newdata, callback);
    });
    console.log(connection);
params.forEach(param => {
request.addParameter(param.name, param.type, param.val);
});
console.log(request.params);
request.on('row', function (columns) {
        utility.buildRow(columns, newdata);
    });
connection.callProcedure(request);
}

module.exports = {  
    loadSqldata,  
    post: spPostExecute
    
};