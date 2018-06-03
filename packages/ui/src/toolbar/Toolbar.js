import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    boxShadow: '0 2px 8px 0 rgba(185,184,187,0.20)',
    width: '100%',
    height: '100%',
  },
})

const Toolbar = ({ children, drawer }) => (
  <div className={styles({ drawer })}>
    {children}
  </div>
)

export default Toolbar
