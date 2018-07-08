import React from 'react'

const NodeExpander = ({ expanded, onClick }) => (
  <a onClick={onClick}>
    {expanded ? '-' : '+'}
  </a>
)

export default NodeExpander
