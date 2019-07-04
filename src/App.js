import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startLoader, stopLoader } from './actionCreators'
import Loader from './components_presentational/Loader'


class App extends Component {


  render() {
    return (

      <div className="app-container" >
        <Loader />
      </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    loaderRunning: state.loaderRunning
    // currentError: state.appStatus.currentError,
    // userSearchTerms: state.currentSearch.userSearchTerms,
    // resultsPerSearch: state.currentSearch.resultsPerSearch,
    // searchStartingID: state.currentSearch.searchStartingID,
    // results: state.currentSearch.results,
    // resultNumber: state.currentSearch.resultNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLoader: () => dispatch(startLoader()),
    stopLoader: () => dispatch(stopLoader())
    // loadError: (message) => dispatch(loadError(message)),
    // deleteError: () => dispatch(deleteError()),
    // beginBookAPIRequest: () => dispatch(beginBookAPIRequest()),
    // endBookAPIRequest: () => dispatch(endBookAPIRequest()),
    // loadSearchTerms: (searchTerms) => dispatch(loadSearchTerms(searchTerms)),
    // increaseSearchStartingID: () => dispatch(increaseSearchStartingID()),
    // resetSearch: () => dispatch(resetSearch()),
    // getBookRecordsBasicSearch: (searchParameters) => dispatch(getBookRecordsBasicSearch(searchParameters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
