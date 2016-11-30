import React from 'react';
import { searchCharacter } from '../util/characters_api_util';
import SearchResults from './search_results';

import {Link} from 'react-router';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      searchResults: {data: {results: []}},
      hidden: 'hidden'
    };
    this.selectName = this.selectName.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.clearInput = this.clearInput.bind(this);

  }

  selectName(event) {
    let name = event.currentTarget.value;
    this.setState({inputVal: name});
    if (event.currentTarget.value != "") {
      this.setState({hidden: ''});
      searchCharacter(event.currentTarget.value, this.updateResults);
    } else {
      this.setState({hidden: 'hidden'});
    }
  }

  updateResults (data) {
    this.setState({
      searchResults: data
    });
  }

  clearInput() {
    this.setState({
      inputVal: '',
      hidden: 'hidden'
    })
  }

  render() {

    let characters = this.state.searchResults.data.results;

    return(
      <div>
        <div className='auto'>
          <input
            onChange={this.selectName}
            value={this.state.inputVal}
            placeholder='Search Characters'/>
          <SearchResults characters={characters} clearInput={this.clearInput} hidden={this.state.hidden} />
        </div>
      </div>
    );
  }
};
