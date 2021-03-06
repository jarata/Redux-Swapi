import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";
// import actions
import { getSW } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSW()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h1>loading</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.fetching,
  error: state.error
});
export default connect(
  mapStateToProps,
  {
    getSW
  }
)(CharacterListView);
