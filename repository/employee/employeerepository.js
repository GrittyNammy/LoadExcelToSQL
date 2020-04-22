const sql = require('mssql/msnodesqlv8')
var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

var config = {
    server: 'NAMMY-PC\\NAMMYMSSQLSERVER',
    database: 'Company',
    port: 1433,
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

function EmployeeRepository() {

function LoadSQLTable(objSheet1)
{
    var dbConnect = new sql.connect(config, function (err) {
        if (err) {
            console.log("Error while connecting database: " + err)
        }
        else {
            console.log("connected to database: " + config.server);
        objSheet1.forEach(element => {
    
            var request = new sql.Request(dbConnect);
            for (var prop in element) {
                
                if (prop == "Name") {
                    request.input(prop, sql.VarChar(50), element[prop]);                
                }
                if (prop == "Title") {
                    request.input(prop, sql.VarChar(200), element[prop]);
                }
                if (prop == "Salary") {
                    request.input(prop, sql.Int, element[prop]);
                }
    
            }
    
            request.execute('InsertOrUpdateEmployee').then(function (err, recordsets, returnValue, affected) {
                // console.dir(recordsets);
    
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    });
}    

return {
    LoadSQLTable        
    }
}
module.exports = EmployeeRepository;