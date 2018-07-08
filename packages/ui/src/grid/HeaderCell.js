import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    justifyContent: 'flex-start',
    padding: '23px 0px 23px 24px',
    color: '#373a3c',
    fontSize: '16px',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 700,
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
})

const HeaderCell = ({ column }) => (
  <div
    className={styles()}
    style={{ flexBasis: column.props.basis || 'auto' }}
  >
    {column.props.title}
  </div>
)

export default HeaderCell
