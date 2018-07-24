var AWS = require('aws-sdk'),
    options = {
        region: "localhost",
        endpoint: "http://localhost:8000"
    };

var isOffline = function () {
    return (
        // IS_LOCAL is true when functions are executed via `sls invoke local`
        process.env.IS_LOCAL ||

        // Depends on serverless-offline plugion which adds IS_OFFLINE to process.env when running offline
        process.env.IS_OFFLINE
    );
};

var dynamodb = {
    doc: isOffline() ? new AWS.DynamoDB.DocumentClient(options) : new AWS.DynamoDB.DocumentClient(),
    raw: isOffline() ? new AWS.DynamoDB(options) : new AWS.DynamoDB()
};
module.exports = dynamodb;
