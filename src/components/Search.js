import React from 'react';

import ES from '../util/ES';

class Search extends React.Component {

  state = {
    query: '',
    results: undefined,
  };

  _handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });

    this._query();
  }

  _query = () => {
    ES.search(3, {}).then(results => {
      this.setState({
        results
      });
    });
  }

  render() {
    return (
      <div>

        <h2>Search</h2>

        <input
          onChange={this._handleChange}
          type="search"
          value={this.state.query} />

        {this.state.results &&
          <div>
            <p>Showing {this.state.results.hits.length} out of {this.state.results.total} results</p>
            <ul>
              {this.state.results.hits.map(hit =>
                <li key={hit._id}>{JSON.stringify(hit)}</li>
              )}
            </ul>
          </div>
        }
      </div>
    );
  }

}

export default Search;
