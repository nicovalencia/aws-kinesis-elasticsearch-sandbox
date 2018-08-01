import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Firehose } from './util/AWS';

Firehose.putRecord({
  eventName: 'page-load',
  path: '/',
  timestamp: new Date().getTime(),
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
