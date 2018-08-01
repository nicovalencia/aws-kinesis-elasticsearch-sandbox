# AWS Kinesis + ElasticSearch Sandbox

This app demos:

* [] User inputs data to react static app
* [] User data is sent live to AWS Kinesis
* [] Kinesis (&/or Lambda) transforms the data
* [] Kinesis backs up source data
* [] Kinesis records errors
* [] AWS ElasticSearch is fed Kinesis stream
* [] React static app displays indexed data

# Setup

* Set AWS credentials in `src/util/config.js` (copy the example config)
