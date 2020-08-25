import React from 'react'

import Nav from '../Nav'

const Layout = props => (
  <div>
    <h1>Hi</h1>
    <Nav />

    {props.children}
  </div>
)

export default Layout
