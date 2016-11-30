import React from 'react';
import CharacterItem from './character_item';
import {hashHistory} from 'react-router';
import SearchBar from './search_bar';

class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    };
    this._redirectToChar = this._redirectToChar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      characters: nextProps.characters
    })
  }

  _redirectToChar(charId){
    return (e => hashHistory.push(`/characters/${charId}`));
  }

  render(){
    return (
      <section className="characters-section">
        <div className="overlay">
          <div className="header-container">
            <h1 className="app-header">
              <img className="logo" src="http://res.cloudinary.com/dfufqfnjx/image/upload/v1479839177/RTEmagicC_marvel-logo-psd69892.png_tyfamv.png"/>
              Encyclopedia
            </h1>
            <SearchBar/>
          </div>
          <ul className="characters-list">
            {this.state.characters.map(character => (
              <CharacterItem
                key={character.id}
                character={character}
                handleClick={this._redirectToChar(character.id)}/>
            ))}
          </ul>
        </div>
      </section>
    );
  }
};

export default Characters;
