import React from "react"
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import App from './App'

let wrap = mount(<App />)

describe("Greeting", () => {
  it("Users should see a 'welcome' message", () => {
    expect(wrap.text()).toContain("Welcome to Shades' Movie Search")
  })
})

describe("Title", () => {
  it("Users should see a 'Title' column", () => {
    expect(wrap.text()).toContain("Movie Title")
  })
})

describe("Thumbs Up", () => {
  it("Users should see a 'Thumbs Up' column", () => {
    expect(wrap.text()).toContain("Thumbs Up")
  })
})

describe("Thumbs Down", () => {
  it("Users should see a 'Thumbs Down' column", () => {
    expect(wrap.text()).toContain("Thumbs Down")
  })
})
