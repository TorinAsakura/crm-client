import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Maven Pro", sans-serif',
    color: '#000000',
    textDecoration: 'none',
    borderColor: '#ffffff',
    borderLeft: '5px solid #ffffff',
    fontSize: '16px',
    fontWeight: '700',
    width: '320px',
    height: '64px',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    transition: 'all 0.2s',
    '& svg': {
      marginRight: '16px',
    },
    '& svg:first-child': {
      marginLeft: '6px',
      marginRight: '24px',
      marginTop: '2px',
      fill: 'transparent',
    },
  },
  active: {
    '& svg:first-child': {
      fill: '#E31D1A',
    },
  },
  minimized: {
    width: '88px',
    paddingLeft: '5px',
    justifyContent: 'center',
    '& svg:first-child': {
      marginRight: '12px',
    },
  },
})

const NestedItem = ({ minimized, to, exact, icon, children, onClick }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true, minimized })}
    activeClassName={styles({ active: true, minimized })}
    onClick={onClick}
  >
    <svg width='8px' height='8px' viewBox='0 0 8 8'>
      <circle cx='4' cy='4' r='4' />
    </svg>
    {icon}
    {minimized ? null : children}
  </NavLink>
)

export default NestedItem
