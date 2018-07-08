import React, { Children } from 'react'
import { StyleSheet } from 'elementum'
import Cell from './Cell'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    cursor: 'pointer',
    '&:hover': {
      background: '#fcfcfc',
    },
  },
  'color=red': {
    background: 'rgba(255, 0, 0, 0.3)',
  },
  'color=blue': {
    background: 'rgba(0, 0, 255, 0.3)',
  },
  'color=orange': {
    background: 'rgba(255, 165, 0, 0.3)',
  },
})

const Row = ({ columns, value, index, color, onClick = f => f, ...props }) => (
  <div
    className={styles({ color: typeof color === 'function' ? color(value) : color })}
    onClick={(event) => {
      if (!event.defaultPrevented) {
        onClick(value, event)
      }
    }}
  >
    {Children.map(columns, column => (
      <Cell
        key={`${value.id}-${column.name}-${index}`}
        column={column}
        value={value}
        {...props}
      />
    ))}
  </div>
)

export default Row
