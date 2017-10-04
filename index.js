const AWS = require('aws-sdk');

const options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
};

/**
 * Check IS_OFFLINE environment variable is set.
 *
 * @returns {boolean}
 */
function isOffline() {
    // Depends on serverless-offline plugion which adds IS_OFFLINE to process.env when running offline
    return process.env.IS_OFFLINE;
}

const dynamodb = {
    doc() { return isOffline() ? new AWS.DynamoDB.DocumentClient(options) : new AWS.DynamoDB.DocumentClient(); },
    raw() { return isOffline() ? new AWS.DynamoDB(options) : new AWS.DynamoDB(); }
};

module.exports = dynamodb;
