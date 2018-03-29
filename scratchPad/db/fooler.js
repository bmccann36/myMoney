var AWS = require("aws-sdk");
var DOC = require("dynamodb-doc");

AWS.config.update({ region: 'us-east-1'});

var docClient = new DOC.DynamoDB();

// Basic Callback
var pfunc = function (err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
}

params = {};
params.TableName = "personal-finance02";
params.Key = { entryId: "01" }

docClient.getItem(params, pfunc);

/* Response
{Item: {UserId : "John",
       Age     : 21,
       Pic     : Bin}}
*/
