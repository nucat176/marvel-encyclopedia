import {combineReducers} from 'redux';

import CharactersReducer from './characters_reducer';
import CharacterReducer from './character_reducer';

export default combineReducers({
  characters: CharactersReducer,
  character: CharacterReducer
});
