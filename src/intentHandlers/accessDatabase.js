// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'us-east-1' });


// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });


module.exports = function accessDatabase() {
  var params = {
    TableName: 'personal-finance02',
    Key: { 'entryId': { N: '01' }, },
    // ProjectionExpression: 'category'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params).promise()
    .then(data => {
      const speechOutput = 'entry data: ' + JSON.stringify(data)
      console.info(speechOutput);
      const reprompt = ''
      this.response.speak(speechOutput).listen(reprompt);
      this.emit(':responseReady')
    })
    .catch(err => {
      console.info(err)
    })
}
