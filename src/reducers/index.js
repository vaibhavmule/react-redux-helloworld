import { combineReducers } from 'redux'
import { HELLO_WORLD } from './../actions'

const helloWorld = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return Object.assign({}, state, { message: 'Hello, World!' })
    default:
      return state
  }
}

const helloReducer = combineReducers({
  helloWorld
})

export default helloReducer
