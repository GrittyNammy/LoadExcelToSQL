
const sql = require('mssql/msnodesqlv8')

var config = {
    server: 'NAMMY-PC\\NAMMYMSSQLSERVER',
    database: 'Company',
    port: 1433,
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};

var dbConnect = new sql.connect(config, function (err) {
    if (err) {
        console.log("Error while connecting database: " + err);
    }
    else {
        console.log("Connected to database");
    }

});
module.exports = dbConnect;