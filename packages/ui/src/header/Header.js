import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    boxShadow: '0 2px 8px 0 rgba(185,184,187,0.20)',
    background: '#ffffff',
  },
})

const Header = ({ children, center }) => (
  <div className={styles({ center })}>
    {children}
  </div>
)

export default Header
