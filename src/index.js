"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDB = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const HOST = process.env.LOCAL_DDB_HOST || "localhost";
const PORT = process.env.LOCAL_DDB_PORT || 8000;
const ENDPOINT = process.env.LOCAL_DDB_ENDPOINT || `http://${HOST}:${PORT}`;
const OFFLINE_OPTIONS = {
    region: "localhost",
    endpoint: ENDPOINT,
    accessKeyId: "MOCK_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_SECRET_ACCESS_KEY",
};
const IS_OFFLINE = process.env.IS_OFFLINE || process.env.IS_LOCAL;
class OfflineDynamoDB extends aws_sdk_1.default.DynamoDB {
    constructor(options) {
        super({ ...options, ...OFFLINE_OPTIONS });
    }
}
OfflineDynamoDB.DocumentClient = class OfflineDocumentClient extends (aws_sdk_1.default.DynamoDB.DocumentClient) {
    constructor(options) {
        super({ ...options, ...OFFLINE_OPTIONS });
    }
};
exports.DynamoDB = IS_OFFLINE ? OfflineDynamoDB : aws_sdk_1.default.DynamoDB;
