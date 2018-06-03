/* eslint-disable no-nested-ternary */
import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '100%',
    background: 'linear-gradient(354.47deg, #E6A70D 0%, #C17800 100%)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
    transition: 'all 200ms ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& span': {
      display: 'none',
    },
  },
  'value=inner': {
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    '& span': {
      display: 'initial',
      marginRight: '6px',
      color: '#ffffff',
      fontFamily: '"Maven Pro", sans-serif',
      fontSize: '24px',
    },
  },
  'value=outer': {
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    position: 'relative',
    '& span': {
      width: '150px',
      position: 'absolute',
      right: '-165px',
      display: 'initial',
      marginRight: '6px',
      color: '#E6A70D',
      fontFamily: '"Maven Pro", sans-serif',
      fontSize: '24px',
    },
  },
})

const Line = ({ progress = 0, showValue }) => (
  <div
    className={styles({ value: showValue ? (progress > 20 ? 'inner' : 'outer') : undefined })}
    style={{ width: `${progress}%` }}
  >
    <span>{progress}%</span>
  </div>
)

export default Line
