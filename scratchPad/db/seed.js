// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create the DynamoDB service object
const request = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

// { category: { S: 'hobbies' },
// amount: { N: '100' },
// date: { S: '2018-03-25' },
// entryId: { N: '1' } } }

var params = {
  RequestItems: {
    'personal-finance02': [
      {
        PutRequest: {
          Item: {
            entryId: { N: '2' },
            date: { S: '2018-03-2' },
            amount: { N: '50' },
            category: { S: 'food' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            entryId: { N: '3' },
            date: { S: '2018-02-2' },
            amount: { N: '10' },
            category: { S: 'food' }
          }
        }
      }
    ]
  }
};

request.batchWriteItem(params)
  .promise()
  .then(res => {
    console.log(res)
  })
