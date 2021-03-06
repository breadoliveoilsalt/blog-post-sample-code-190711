function rootReducer(state = {loaderRunning: false}, action) {
  switch(action.type) {
    case 'START_LOADER':
      return Object.assign({}, state, {loaderRunning: true})
    case 'STOP_LOADER':
      return Object.assign({}, state, {loaderRunning: false})
    default:
      return state
  }
}

export default rootReducer
