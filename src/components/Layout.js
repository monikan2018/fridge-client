import React from 'react'

const Layout = props => (
  <div>
    <h1>FRIDGE</h1>
    <h5>it&apos;s what&apos;s on the inside that counts!</h5>

    {props.children}

  </div>
)

export default Layout
