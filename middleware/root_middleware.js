import {applyMiddleware} from 'redux';
import CharactersMiddleware from './characters_middleware';

import createLogger from 'redux-logger';
const logger = createLogger();

const RootMiddleware = applyMiddleware(
  CharactersMiddleware,
  logger
);

export default RootMiddleware;
