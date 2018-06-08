import React from 'react'
import { StyleSheet } from 'elementum'
import Toggle from './Toggle'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    boxShadow: '0 2px 8px 0 rgba(185,184,187,0.20)',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
})

const Toolbar = ({ minimized = false, children, onToggle }) => (
  <div className={styles()}>
    <Toggle
      minimized={minimized}
      onClick={onToggle}
    />
    {children}
  </div>
)

export default Toolbar
