import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    fontFamily: '"Maven Pro", sans-serif',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '14px 27px 13px 22px',
    width: '100%',
    borderColor: '#ffffff',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: '5px',
  },
  active: {
    borderColor: '#E31D1A',
    color: '#E31D1A',
  },
})

const Item = ({ to, exact, center, children, onClick }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true, center })}
    activeClassName={styles({ active: true })}
    onClick={onClick}
  >
    {children}
  </NavLink>
)

export default Item
