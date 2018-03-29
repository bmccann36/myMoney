
// Load the SDK for JavaScript
// var AWS = require('aws-sdk');
// Set the region
// AWS.config.update({ region: 'us-east-1' });


const config = require('aws-sdk').config
config.update({ region: 'us-east-1' });
const DynamoDB = require('aws-sdk').DynamoDB

// Create the DynamoDB service object
// const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

const ddb = new DynamoDB({ apiVersion: '2012-10-08' });


// module.exports =
function accessDatabase() {
  var params = {
    TableName: 'personal-finance02',
    Key: { 'entryId': { N: '01' }, },
    // ProjectionExpression: 'category'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params).promise()
    .then(function (data) {
      console.info('promise resolve')
      console.info(data)
    })
    .then(() => {
      console.info('Success!');
    })
    .catch(err => {
      console.info(err)
    })
}


accessDatabase()
