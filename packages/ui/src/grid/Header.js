import React, { Children } from 'react'
import { StyleSheet } from 'elementum'
import HeaderCell from './HeaderCell'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
})

const Header = ({ columns }) => (
  <div className={styles()}>
    {Children.toArray(columns).filter(column => column.props.title !== false).map((column, index) => (
      <HeaderCell
        key={`header-${column.props.name || index}`}
        column={column}
      />
    ))}
  </div>
)

export default Header
