import AWS from "aws-sdk";

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

class OfflineDynamoDB extends AWS.DynamoDB {
  constructor(options: AWS.DynamoDB.Types.ClientConfiguration) {
    super({ ...options, ...OFFLINE_OPTIONS });
  }
}

OfflineDynamoDB.DocumentClient = class OfflineDocumentClient extends (
  AWS.DynamoDB.DocumentClient
) {
  constructor(
    options: AWS.DynamoDB.DocumentClient.DocumentClientOptions &
      AWS.DynamoDB.Types.ClientConfiguration
  ) {
    super({ ...options, ...OFFLINE_OPTIONS });
  }
};

export const DynamoDB = IS_OFFLINE ? OfflineDynamoDB : AWS.DynamoDB;
