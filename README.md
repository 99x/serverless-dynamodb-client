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
const { DynamoDB } = require('serverless-dynamodb-client');

// then use it as a standard DynamoDB client
```

## Env variables

You can define some database configuration with environment variables.
Here they are:

- LOCAL_DDB_HOST: local dynamodb hostname, default is `localhost`
- LOCAL_DDB_PORT: local dynamodb port, default is `8080`
- LOCAL_DDB_ENDPOINT: local dynamodb endpoint if you don't want to use HOST and PORT variables, default is `http://${HOST}:${PORT}\`;

## References

* Dynamodb SDK (rawClient): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html
* Dynamodb Document Client SDK (docClient): http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
