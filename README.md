serverless-dynamodb-client
=================================

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![npm version](https://badge.fury.io/js/serverless-dynamodb-client.svg)](https://badge.fury.io/js/serverless-dynamodb-client)
[![license](https://img.shields.io/npm/l/serverless-dynamodb-client.svg)](https://www.npmjs.com/package/serverless-dynamodb-client)

This Serverless 0.5.x plugin help you to call AWS Dynamodb SDK without switching between different dynamodb instances, whether you work with Dynamodb local or online in AWS.

## This Plugin Requires
*  [serverless-offline](https://github.com/dherault/serverless-offline)
*  [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local)


## Using in your code

For each Lambda function, run the following command to add it to the npm package.json dependancies list

`npm install --save serverless-dynamodb-client`

Then you can use dynamodb in your code as follows

```
var dynamodb = require('serverless-dynamodb-client');

var rawClient = dynamodb.raw;  // returns an instance of new AWS.DynamoDB()

var docClient = dynamodb.doc;  // return an instance of new AWS.DynamoDB.DocumentClient()
```

Note: You need to run the serverless-dynamodb-local with default port: 8000 for this library to work

## References

* Dynamodb SDK (rawClient): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
* Dynamodb Document Client SDK (docClient): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
