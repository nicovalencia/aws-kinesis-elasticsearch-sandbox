import AWS from 'aws-sdk';

import config from './config';

// Setup:

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: config.aws.kinesis.identityPoolId,
});

AWS.config.region = config.aws.kinesis.region;

// Service getters:
// todo: separate module

var firehose;
export const getFirehose = async function() {

  // Memoize:
  if (firehose) {
    return Promise.resolve(firehose);
  }

  return new Promise((resolve, reject) => {

    AWS.config.credentials.get(function(err) {

      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      firehose = new AWS.Firehose({
        apiVersion: config.aws.kinesis.apiVersion,
      });

      resolve(firehose);

    });

  });
}

// Service Interfaces:
// todo: separate module

export class Firehose {

  static putRecord(data) {
    getFirehose().then(firehose => {

      firehose.putRecord({
        DeliveryStreamName: config.aws.kinesis.deliveryStreamName,
        Record: {
          Data: JSON.stringify(data),
        }
      }, function(err, data) {

        if (err) {
          console.log(err);
        } else {
          console.log('AWS Firehose logged:', data);
        }

      });

    });
  }

}

export default AWS;
