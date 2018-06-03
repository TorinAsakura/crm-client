import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  'align=left': {
    left: '12px',
  },
  'align=right': {
    right: '15px',
  },
})

const Icon = ({ icon, align = 'right' }) => {
  if (!icon) {
    return null
  }

  return (
    <span className={styles({ align })}>
      {icon}
    </span>
  )
}

export default Icon
