import * as AWS from 'aws-sdk';

export class DynamodbService {
  AWS;
  docClient;
  TABLE;

  constructor () {
    this.AWS = AWS;
    this.AWS.config.update({
      AWS_ACCESS_KEY_ID: 'AKIAVBQC2S67CNDXUKFK',
      AWS_SECRET_ACCESS_KEY: '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',
      region: 'us-east-1'
    });
    this.AWS.config.credentials = new this.AWS.SharedIniFileCredentials({ profile: 'serverless' });
    this.docClient = new this.AWS.DynamoDB.DocumentClient();
    // this.TABLE = table;
  }

  scan (table) {
    const params = {
      TableName: table
    };
    return new Promise((resolve, reject) => {
      this.docClient.scan(params, (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Items);
        }
      });
    });
  }

  query (table: string, projection: string, conditionExpression: string, attributeNames: any, attributeValues: any) {
    const params = {
      TableName: table,
      ProjectionExpression: projection,
      KeyConditionExpression: conditionExpression,
      ExpressionAttributeNames: attributeNames,
      ExpressionAttributeValues: attributeValues
    };
    return new Promise((resolve, reject) => {
      this.docClient.query(params, (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.Items);
        }
      });
    });
  }

  get (table, keys: any) {
    const params = {
      TableName: table,
      Key: keys
    };
    console.log(params);
    return new Promise((resolve, reject) => {
      this.docClient.get(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
  }
}
