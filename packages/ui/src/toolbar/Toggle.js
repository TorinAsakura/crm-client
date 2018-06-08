import React from 'react'
import { StyleSheet } from 'elementum'
import { ArrowIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    width: '24px',
    height: '24px',
    background: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '8px',
    right: '-12px',
    position: 'absolute',
    cursor: 'pointer',
    border: '1px solid #ffffff',
    zIndex: 1,
    '&:hover': {
      border: '1px solid #f2f2f2',
    },
  },
})

const Toggle = ({ minimized, onClick }) => (
  <a
    className={styles()}
    onClick={onClick}
  >
    <ArrowIcon
      left={!minimized}
      height={12}
      fill='#E31D1A'
    />
  </a>
)

export default Toggle
