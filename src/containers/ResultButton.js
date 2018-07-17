import { connect } from "react-redux";
import { getResult } from "../actions";

import ComputeButton from "../components/ComputeButton";

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(getResult())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComputeButton);
