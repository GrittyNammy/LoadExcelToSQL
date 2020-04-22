'use strict';
const excelToJson = require('convert-excel-to-json');
const xlsxFile = require('read-excel-file/node');

const dbContext = require('./Database/dbContext');


const result = excelToJson({
    sourceFile: './Data.xlsx', // fs.readFileSync return a Buffer
    header: {
        rows: 1
    },
    columnToKey: {
        A: '{{A1}}',
        B: '{{B1}}',
        C: '{{C1}}'
    }
});


var jsonResult = JSON.stringify(result);
var Object = JSON.parse(jsonResult);

var objSheet1 = Object["Sheet1"];



// var config = {
//     server: 'NAMMY-PC\\NAMMYMSSQLSERVER',
//     database: 'Company',
//     port: 1433,
//     driver: "msnodesqlv8",
//     options: {
//         trustedConnection: true
//     }
// };

// var dbConnect = new sql.connect(config, function (err) {
//     if (err) {
//         console.log("Error while connecting database: " + err)
//     }
//     else {
//         console.log("connected to database: " + config.server);

        // objSheet1.forEach(element => {

        //     var request = new sql.Request(dbConnect);
        //     for (var prop in element) {
        //         console.log(prop);
        //         console.log(element[prop]);
        //         if (prop == "Name") {
        //             request.input(prop, sql.VarChar(50), element[prop]);
        //             console.log(element[prop]);
        //         }
        //         if (prop == "Title") {
        //             request.input(prop, sql.VarChar(200), element[prop]);
        //         }
        //         if (prop == "Salary") {
        //             request.input(prop, sql.Int, element[prop]);
        //         }

        //     }

        //     request.execute('InsertOrUpdateEmployee').then(function (err, recordsets, returnValue, affected) {
        //         // console.dir(recordsets);

        //     }).catch(function (err) {
        //         console.log(err);
        //     });
        // });
//     }
// });


dbContext.loadSqldata(objSheet1);


