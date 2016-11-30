import {RECEIVE_SHOW_CHARACTER} from '../actions/character_actions';

import merge from 'lodash/merge';

const CharacterReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_SHOW_CHARACTER:
      return merge({}, state, action.character.data.results[0]);
    default:
      return state;
  }
};

export default CharacterReducer;
