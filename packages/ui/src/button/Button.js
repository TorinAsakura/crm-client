import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 0,
    borderWidth: '0px',
    boxSizing: 'border-box',
    borderRadius: '3px',
    textAlign: 'center',
    fontFamily: '"Maven Pro", sans-serif',
    fontWeight: 500,
    lineHeight: 1,
    color: '#ffffff',
    transition: 'all 0.2s ease-in-out',
  },
  fill: {
    width: '100%',
  },
  'size=small': {
    height: '32px',
    fontSize: '12px',
    padding: '0px 21px',
  },
  'size=normal': {
    height: '44px',
    fontSize: '16px',
    padding: '0px 21px',
  },
  'size=large': {
    height: '64px',
    fontSize: '24px',
    padding: '0px 21px',
  },
  'color=blue': {
    background: '#5492EA',
    border: '1px solid #5492EA',
    color: '#5492EA',
  },
  'type=shaded': {
    color: '#ffffff',
  },
  'type=transparent': {
    background: 'transparent',
  },
})

const Button = ({
  children, disabled, fill, color = 'blue', type = 'shaded',
  size = 'normal', rounded, onClick,
}) => (
  <button
    disabled={disabled}
    className={styles({ type, disabled, fill, color, size, rounded })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
