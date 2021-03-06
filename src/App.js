import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startLoader, stopLoader } from './actionCreators'
import Loader from './components_presentational/Loader'
import InfoPage from './components_presentational/InfoPage'

export class App extends Component {

  constructor(props) {
    super(props)
    this.handleLoaderStart = this.handleLoaderStart.bind(this)
    this.handleLoaderStop = this.handleLoaderStop.bind(this)
  }

  handleLoaderStart(event) {
    event.preventDefault()
    this.props.dispatchStartLoader()
  }

  handleLoaderStop(event) {
    event.preventDefault()
    this.props.dispatchStopLoader()
  }

  render() {
    if (this.props.loaderRunning) {
      return (
        <div>
          <Loader />
          <a href="" onClick={this.handleLoaderStop}> Click to Stop Loader and See Info Page </a>
        </div>
      )
    } else if (!this.props.loaderRunning) {
      return (
        <div>
          <InfoPage />
          <a href="" onClick={this.handleLoaderStart}> Click to Start Loader </a>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    loaderRunning: state.loaderRunning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchStartLoader: () => dispatch(startLoader()),
    dispatchStopLoader: () => dispatch(stopLoader())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
