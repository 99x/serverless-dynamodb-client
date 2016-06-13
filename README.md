serverless-dynamodb-client
=================================

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

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

var docClient = dynamodb.doc;  // return an instance of new AWS.DynamoDB.DocumentClient()

var rawClient = dynamodb.raw;  // returns an instance of new AWS.DynamoDB()
```

Note: You need to run the serverless-dynamodb-local with default port: 8000 for this library to work

## References

* DocumentClient => Defining table schema (Dynamodb SDK): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
* Default Client => Defining seeds (Dynamodb Document Client SDK): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
