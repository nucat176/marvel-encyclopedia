import {connect} from 'react-redux';
import {fetchCharacters, fetchCharacter} from '../actions/character_actions';
import Characters from './characters';

const mapStateToProps = state => ({
  characters: Object.keys(state.characters).map(id => state.characters[id]).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  fetchCharacter: id => dispatch(fetchCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
