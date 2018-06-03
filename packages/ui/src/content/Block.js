import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    borderRadius: '3px',
    background: '#ffffff',
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
})

const Block = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Block
