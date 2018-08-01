import elasticsearch from 'elasticsearch';

import config from './config';

const client = new elasticsearch.Client({
  host: config.aws.elasticsearch.host,
});

// Service Interface:
class ES {

  static getRecordCount() {
    return client.count({})
      .then(resp => resp.count)
      .catch(err => {
        console.error('ES Error:', err);
      });
  }

}

export default ES;
