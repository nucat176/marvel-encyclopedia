import {
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER
} from '../actions/character_actions';

import merge from 'lodash/merge';

const _defaultState = {};

const CharactersReducer = (state = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_CHARACTERS:
      let charObj = {};
      action.characters.data.results.forEach(character => {
        charObj[character.id] = character
      });
      return merge({}, charObj);
    case RECEIVE_CHARACTER:
      return merge({}, state, {[action.character.data.results[0].id]: action.character.data.results[0]});
    default:
      return state;
  }
};

export default CharactersReducer;
