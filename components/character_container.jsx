import {connect} from 'react-redux';
import {fetchCharacters, fetchCharacter} from '../actions/character_actions';
import Character from './character';

const mapStateToProps = state => ({
  character: state.character
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  fetchCharacter: id => dispatch(fetchCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
