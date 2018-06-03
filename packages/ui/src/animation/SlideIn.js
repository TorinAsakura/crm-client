import React from 'react'
import { Motion, spring } from 'react-motion'

const SlideIn = ({ children, from, to, show }) => (
  <Motion style={{ top: spring(show ? to : from) }}>
    {({ top }) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top,
        }}
      >
        {children}
      </div>
    )}
  </Motion>
)

export default SlideIn
