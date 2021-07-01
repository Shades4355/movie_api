import React from "react"
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import MovieTile from './MovieTile'

let wrap = mount(
  <MovieTile
  key={1}
  id={2}
  title={"Movie: The Movie"}
  year={"2021-Jan-03"}
  desc={"A Movie"}
  upvotes={1}
  downvotes={0}
  />)

describe("Movie Title", () => {
  it("Users should see a movie title", () => {
    expect(wrap.text()).toContain("Movie: The Movie")
  })
})

describe("Thumbs Up", () => {
  it("Users should see a thumbs up number", () => {
    expect(wrap.text()).toContain(1)
  })
})

describe("Thumbs Down", () => {
  it("Users should see a thumbs down number", () => {
    expect(wrap.text()).toContain(0)
  })
})
