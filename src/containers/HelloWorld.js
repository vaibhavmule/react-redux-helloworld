import { connect } from 'react-redux'
import { helloWorld, reset } from './../actions'
import Hello from './../components/Hello'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(helloWorld()),
    reset: () => dispatch(reset())
  }
}

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default HelloWorld
