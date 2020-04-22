'use strict';
const excelToJson = require('convert-excel-to-json');
const xlsxFile = require('read-excel-file/node');

const dbContext = require('./Database/dbContext');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 3300
app.listen(port, () => {
    console.log("Hi This port is running");

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
    dbContext.loadSqldata(objSheet1);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = require('./routes')();
 
app.use('/api', router);