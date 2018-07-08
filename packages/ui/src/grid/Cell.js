import React from 'react'
import { StyleSheet } from 'elementum'
import { path } from 'ramda'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    justifyContent: 'center',
    padding: '23px 0px 23px 24px',
    color: '#000000',
    fontSize: '16px',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  'justify=top': {
    justifyContent: 'flex-start',
  },
})

const getContent = (column, value, props) => {
  if (column.props.renderer) {
    return column.props.renderer(value, props)
  }

  if (column.props.name) {
    return path(column.props.name.split('.'), value)
  }

  return null
}

const Cell = ({ column, value, ...props }) => (
  <div
    className={styles({ ...column.props })}
    style={{ flexBasis: column.props.basis || 'auto' }}
  >
    {getContent(column, value, props)}
  </div>
)

export default Cell
