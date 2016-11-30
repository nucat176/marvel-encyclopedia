import React from 'react';
import {hashHistory} from 'react-router';
import SearchBar from './search_bar';
var $ = require('jQuery');

class Character extends React.Component {
  constructor(props){
    super(props);
    this.createImgLink = this.createImgLink.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.getStats = this.getStats.bind(this);
    this.getPowers = this.getPowers.bind(this);
    this.getAbilities = this.getAbilities.bind(this);
    this.state = {character: {name: ""}, powers: "", abilities: ""};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      character: nextProps.character
    });
    this.getPowers(nextProps.character);
    this.getAbilities(nextProps.character);
  }

  createImgLink(){
    if(this.state.character.thumbnail){
      return this.state.character.thumbnail.path + '/portrait_fantastic.' + this.state.character.thumbnail.extension;
    } else {
      return "";
    }
  }

  backToHome(){
    hashHistory.push("/");
  }

  renderDescription(){
    if (this.state.character.description === ""){
      return (
        <span>
          <b className="char-label">Description</b>
          <br/>
          <br/>
          None
        </span>
      );
    } else {
      return (
        <p className="character-description">
          <b className="char-label">Description</b>
          <br/>
          <br/>
          {this.state.character.description}
        </p>
      );
    }
  }

  getStats(character){
    let that = this;
    let urlWords = character.name.split(" ");
    let url = "https://cors.io/?http://marvel.wikia.com/wiki/";
    urlWords.forEach((word, idx) => {
      if (idx === urlWords.length - 1){
        url += word;
      } else {
        url += word + "_";
      }
    });
    let name = "";
    console.log(url);
    $.get(url, function(data){

      let htmlData = data;
      let meta = $(htmlData).find('#mw-content-text');
      name = $(meta).find('b')[0].innerText;
      let splitName = name.split(" ");
      let firstName = splitName[0];
      let lastName = splitName[splitName.length - 1];
      let newUrl = "https://cors.io/?http://marvel.wikia.com/wiki/" + firstName + "_" + lastName + "_(Earth-616)";
      $.get(newUrl, function(data){
        let htmlData2 = data;
        // let meta2 = $(htmlData2).find("#WikiaMainContentContainer");
        let powers = $(htmlData2).find('ul');
        let powersList = $(powers).find('b').toArray();
        powersList = powersList.map(power => power.innerText);
        powersList = powersList.map((power, idx) => {
          if (idx === powersList.length - 1){
            if (power[power.length - 1] === ':'){
              return power.slice(0, power.length - 1);
            } else {
              return power;
            }
          } else {
            if (power[power.length - 1] === ':'){
              return power.slice(0, power.length - 1) + ", ";
            } else {
              return power + ", ";
            }
          }
        });
        that.setState({powers: powersList});
      });
    });

  }

  getPowers(character){
    let url = "https://cors.io/?https://marvelousdb.com/character/" + `${character.id}`;
    let that = this;
    $.get(url, function(data){
      let htmlData = data;
      let meta = $(htmlData).find('.powers').children()[1].innerText;
      console.log(meta);
      that.setState({powers: meta});
    });
  }

  getAbilities(character){
    let url = "https://cors.io/?https://marvelousdb.com/character/" + `${character.id}`;
    let that = this;
    $.get(url, function(data){
      let htmlData = data;
      let meta = $(htmlData).find('.abilities').children()[1].innerText;
      console.log(meta);
      that.setState({abilities: meta});
    });
  }

  render(){
    return (
      <section className='characters-section'>
        <div className='overlay'>
          <div className='character-div'>
            <h1 className='char-title'>
              {this.state.character.name}
              <SearchBar />
            </h1>
            <div className="char-info">
              <img className='character-show-img' src={this.createImgLink()}/>
              <div className='char-desc-powers'>
                {this.renderDescription()}
                <p className="powers">
                  <b className="char-label">Powers</b>
                  <br/>
                  <br/>
                  {this.state.powers}
                </p>
                <p className="powers">
                  <b className="char-label">Abilities</b>
                  <br/>
                  <br/>
                  {this.state.abilities}
                </p>
                <button className='back-to-home' onClick={this.backToHome}>Back To Home</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Character;
