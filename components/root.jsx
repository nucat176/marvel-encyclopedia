import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import CharactersContainer from './characters_container';
import {fetchCharacters, fetchCharacter, fetchShowCharacter} from '../actions/character_actions';
import CharacterContainer from './character_container';
import App from './app';

const Root = ({store}) => {

  const _fetchCharacters = () => {
    store.dispatch(fetchCharacters());
  };

  const _fetchHome = () => {
    store.dispatch(fetchCharacter(1009718));
    store.dispatch(fetchCharacter(1009220));
    store.dispatch(fetchCharacter(1009368));
    store.dispatch(fetchCharacter(1009664));
    store.dispatch(fetchCharacter(1009610));
    store.dispatch(fetchCharacter(1009351));
    store.dispatch(fetchCharacter(1009282));
    store.dispatch(fetchCharacter(1009262));
    store.dispatch(fetchCharacter(1009257));
    store.dispatch(fetchCharacter(1009215));
  }

  const _fetchShowCharacter = (nextState) => {
    store.dispatch(fetchShowCharacter(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CharactersContainer} onEnter={_fetchHome}/>
          <Route path="characters/:id" component={CharacterContainer} onEnter={_fetchShowCharacter}/>
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
