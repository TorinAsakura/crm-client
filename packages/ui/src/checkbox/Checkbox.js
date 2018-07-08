import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '16px',
    height: '16px',
    border: '2px solid #969696',
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    borderRadius: '5px',
    '& > input': {
      opacity: '0',
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      cursor: 'pointer',
    },
  },
  'style=check': {
    '&:before': {
      content: '" "',
      transformOrigin: '25% 150%',
      width: '20%',
      height: '40%',
      position: 'absolute',
      borderBottom: '2px solid #ffffff',
      borderRight: '2px solid #ffffff',
      transform: 'rotate(45deg)',
      opacity: '0',
    },
  },
  'style=radio': {
    background: '#ffffff',
    '&:before': {
      content: '" "',
      width: '10px',
      height: '10px',
      position: 'absolute',
      opacity: '0',
      background: '#5492EA',
      borderRadius: '3px',
      top: '0px',
      left: '0px',
      border: '3px solid #ffffff',
    },
  },
  checked: {
    background: '#5492EA',
    borderColor: '#5492EA',
    '&:before': {
      opacity: '1',
    },
  },
  disabled: {
    opacity: '0.5',
    '& > input': {
      cursor: 'initial',
    },
  },
})

const Checkbox = ({ value, type, style = 'check', disabled, onChange }) => (
  <div className={styles({ checked: value, type, style })}>
    <input
      type='checkbox'
      checked={value}
      disabled={disabled}
      onChange={() => {
        if (onChange) {
          onChange(!value)
        }
      }}
    />
  </div>
)

export default Checkbox
