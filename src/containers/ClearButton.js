import { connect } from "react-redux";
import { clearOperators } from "../actions";

import ComputeButton from "../components/ComputeButton";

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(clearOperators())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComputeButton);
