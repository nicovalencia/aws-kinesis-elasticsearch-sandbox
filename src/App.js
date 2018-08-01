import React from 'react';

import ES from './util/ES';

class App extends React.Component {

  state = {
    esRecordCount: "Loading...",
  };

  componentDidMount() {
    ES.getRecordCount().then(esRecordCount => {
      this.setState({
        esRecordCount
      });
    });
  }

  render() {
    return (
      <div>
        <h1>AWS Kinesis + Elasticsearch Sandbox</h1>
        <p>ES Records: {this.state.esRecordCount}</p>
      </div>
    );
  }
}

export default App;
