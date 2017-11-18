import { connect } from 'react-redux'
import { helloWorld } from './../actions'
import Hello from './../components/Hello'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(helloWorld()),
  }
}

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default HelloWorld
