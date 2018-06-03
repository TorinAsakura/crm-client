import React from 'react'
import { Motion, spring } from 'react-motion'

const FadeInOut = ({ children, show, fill, fillHeight, onRest }) => (
  <Motion style={{ opacity: spring(show ? 1 : 0) }} onRest={onRest}>
    {({ opacity }) => (
      <div
        style={{
          opacity,
          width: fill ? '100%' : undefined,
          height: fillHeight ? '100%' : undefined,
          display: opacity === 0 ? 'none' : undefined,
        }}
      >
        {children}
      </div>
    )}
  </Motion>
)

export default FadeInOut
