import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    borderRadius: '4px',
    background: '#ffffff',
    boxShadow: '0px 2px 8px rgba(185, 184, 187, 0.2)',
    overflow: 'hidden',
  },
})

const Block = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Block
