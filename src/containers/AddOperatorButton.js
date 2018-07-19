import { connect } from "react-redux";
import { addOperator } from "../actions";

import ComputeButton from "../components/ComputeButton";

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addOperator(ownProps.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComputeButton);
