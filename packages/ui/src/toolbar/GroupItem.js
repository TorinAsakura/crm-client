import React from 'react'
import { StyleSheet } from 'elementum'
import { ArrowIcon } from '../icons'

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    cursor: 'pointer',
    '& span': {
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      marginRight: '16px',
    },
  },
  active: {
    borderColor: '#E31D1A',
    color: '#E31D1A',
    '& svg': {
      fill: '#E31D1A',
      stroke: '#E31D1A',
      '& path': {
        stroke: '#E31D1A',
      },
    },
  },
  minimized: {
    width: '88px',
    paddingLeft: '5px',
    justifyContent: 'center',
  },
})

const GroupItem = ({ minimized, isOpened, active, icon, children, onClick }) => (
  <a
    className={styles({ default: true, minimized, active })}
    onClick={onClick}
  >
    <span>
      {icon}
      {!minimized && children}
    </span>
    {!minimized && (
      <ArrowIcon
        height={12}
        width={17}
        top={isOpened}
        down={!isOpened}
      />
    )}
  </a>
)

export default GroupItem
