import { connect } from "react-redux";
import Output from "../components/Output";

const mapStateToProps = (state, ownProps) => ({
  value: state.calculatorApp.result
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);
