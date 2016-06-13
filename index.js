var AWS = require('aws-sdk'),
    options = {
        region: "localhost",
        endpoint: "http://localhost:8000"
    };

var isOffline = function () {
    // Depends on serverless-offline plugion which adds IS_OFFLINE to process.env when running offline
    return process.env.IS_OFFLINE;
};

var dynamodb = {
    doc: isOffline() ? new AWS.DynamoDB.DocumentClient(options) : new AWS.DynamoDB.DocumentClient(),
    raw: isOffline() ? new AWS.DynamoDB(options) : new AWS.DynamoDB()
};
module.exports = dynamodb;
