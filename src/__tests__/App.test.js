import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import App from '../App'
import { startLoader, stopLoader } from '../actionCreators'

describe("<App />", function() {
  describe("#this.props.dispatchStartLoader", function() {
    it("does something", function() {
      expect(true).to.be.true
    })
  })
})
