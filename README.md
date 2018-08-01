# AWS Kinesis + ElasticSearch Sandbox

This app demos:

* [] User inputs data to react static app
* [x] User data is sent live to AWS Kinesis
* [] Kinesis (&/or Lambda) transforms the data
* [x] Kinesis backs up source data
* [x] Kinesis records errors
* [x] AWS ElasticSearch is fed Kinesis stream
* [x] React static app displays indexed data

# Setup

* Set AWS credentials in `src/util/config.js` (copy the example config)
