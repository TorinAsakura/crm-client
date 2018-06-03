import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '3px',
    width: '100%',
    visibility: 'visible',
    opacity: 1,
    transition: 'all 400ms',
    zIndex: 10,
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  absolute: {
    position: 'absolute',
    paddingLeft: 'inherit',
    paddingRight: 'inherit',
    boxSizing: 'border-box',
    left: 0,
    top: 0,
    zIndex: 401,
  },
  extended: {
    height: '32px',
    background: '#f1f2f2',
    borderRadius: '3px',
    overflow: 'hidden',
  },
})

const Container = ({ hidden, absolute, extended, children }) => (
  <div className={styles({ hidden, absolute, extended })}>
    {children}
  </div>
)

export default Container
