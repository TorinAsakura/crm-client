import React from 'react'

const TreeLevel = ({ level = 0 }) => (
  <span style={{ width: 38 * level }} />
)

export default TreeLevel
