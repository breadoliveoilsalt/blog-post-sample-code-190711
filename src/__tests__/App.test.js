import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import ConnectedApp, { App } from '../App'
import { startLoader, stopLoader } from '../actionCreators'

const mockStore = configureMockStore()
const mockState = {}

describe("<App />", function() {
  describe("<App />'s Dispatching Props:", function() {

    let store = mockStore(mockState)
    let wrapper

    beforeEach(function() {
      wrapper = mount(
        <Provider store={store}>
          <ConnectedApp />
        </ Provider>
        )
    })

    afterEach(function() {
      store.clearActions()
    })

    describe("#this.props.dispatchStartLoader", function() {
      it("dispatches the #startLoader action creator to the Redux store", function() {
        const expectedActions = [ startLoader() ]
        wrapper.find(App).instance().props.dispatchStartLoader()
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })

    describe("#this.props.dispatchStopLoader", function() {
      it("dispatches the #stopLoader action creator to the Redux store", function() {
        const expectedActions = [ stopLoader() ]
        wrapper.find(App).instance().props.dispatchStopLoader()
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
    })
  })

  describe("<App />'s prototype methods:", function() {

    let wrapper
    let eventSpy

    beforeEach(function() {

      const props = {
        dispatchStartLoader: sinon.spy(),
        dispatchStopLoader: sinon.spy()
      }
      wrapper = shallow(<App {...props} />)

      eventSpy = {preventDefault: sinon.spy()}

    })

    describe("#handleLoaderStart", function() {
      it("calls #preventDefault() on the event", function() {
        wrapper.instance().handleLoaderStart(eventSpy)
        expect(eventSpy.preventDefault.calledOnce).to.be.true
      })

      it("calls #this.props.dispatchStartLoader", function() {
        wrapper.instance().handleLoaderStart(eventSpy)
        expect(wrapper.instance().props.dispatchStartLoader.calledOnce).to.be.true
      })
    })

    describe("#handleLoaderStop", function() {
      it("calls #preventDefault() on the event", function() {
        wrapper.instance().handleLoaderStop(eventSpy)
        expect(eventSpy.preventDefault.calledOnce).to.be.true
      })

      it("calls #this.props.dispatchStopLoader", function() {
        wrapper.instance().handleLoaderStop(eventSpy)
        expect(wrapper.instance().props.dispatchStopLoader.calledOnce).to.be.true
      })
    })
  })
})
