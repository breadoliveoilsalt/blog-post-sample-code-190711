// import { combineReducers } from 'redux'
// import appStatusReducer from './appStatusReducer'
// import currentSearchReducer from './currentSearchReducer'
//
//
// const defaultState = {
//   loaderRunning: false,
// }

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
//
// export default appStatusReducer
//
// const rootReducer = combineReducers(
//   {
//     appStatus: appStatusReducer,
//     currentSearch: currentSearchReducer
//   }
// )
//
// export default rootReducer
