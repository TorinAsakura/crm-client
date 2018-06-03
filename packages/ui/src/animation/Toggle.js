import React from 'react'
import { Motion, spring } from 'react-motion'

const Toggle = ({ children, height, show }) => (
  <Motion style={{ size: spring(show ? height : 0), opacity: spring(show ? 1 : 0) }}>
    {({ size, opacity }) => (
      <div
        style={{
          opacity,
          width: '100%',
          height: `${size}px`,
        }}
      >
        {children}
      </div>
    )}
  </Motion>
)

export default Toggle
