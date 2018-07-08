import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '1px',
    background: '#eaeaea',
  },
  vertical: {
    width: '1px',
    height: '100%',
  },
  transparent: {
    opacity: 0.2,
  },
  'color=gray': {
    background: '#F1F2F2',
  },
  'color=dark': {
    background: '#BBBBBB',
  },
  'color=orange': {
    background: 'linear-gradient(354.47deg, #E6A70D 0%, #C17800 100%)',
    boxShadow: '0 0 2px 0 rgba(13,117,109,0.37)',
    transform: 'scaleY(-1)',
  },
  'color=green': {
    background: '#2D8F74',
  },
  'size=normal': {
    width: '1px',
    height: '1px',
  },
  'size=large': {
    width: '4px',
    height: '4px',
  },
  'type=horizontal': {
    width: '100%',
  },
  'type=vertical': {
    height: '100%',
  },
})

const Divider = ({ vertical, transparent, color, type, size }) => (
  <div className={styles({ vertical, transparent, color, type, size })} />
)

export default Divider
