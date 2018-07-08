import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Maven Pro", sans-serif',
    color: '#969696',
    textDecoration: 'none',
    fontSize: '16px',
    height: '40px',
    minWidth: '200px',
    boxSizing: 'border-box',
    transition: 'all 0.2s',
    '& svg': {
      marginRight: '10px',
      marginTop: '2px',
      fill: 'transparent',
    },
  },
  active: {
    boxShadow: 'inset 0px 1.5px 0px #E31D1A, inset -1.5px 0px 0px #E31D1A, inset 1.5px 0px 0px #E31D1A',
    borderRadius: '8px 8px 0px 0px',
    fontWeight: '700',
    color: '#000000',
    '& svg:first-child': {
      fill: '#E31D1A',
    },
  },
})

const TabNavLink = ({ to, exact, children, onClick }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true })}
    activeClassName={styles({ active: true })}
    onClick={onClick}
  >
    <svg width='8px' height='8px' viewBox='0 0 8 8'>
      <circle cx='4' cy='4' r='4' />
    </svg>
    {children}
  </NavLink>
)

export default TabNavLink
