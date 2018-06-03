import React from 'react'
import { spring, AnimatedSwitch } from 'react-router-transition'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    '& > div': {
      position: 'absolute',
      width: '100%',
    },
  },
})

const mapStyles = ({ opacity }) => ({
  opacity,
})

const bounce = val => spring(val, { stiffness: 330, damping: 22 })

const atEnter = {
  opacity: 0,
}

const atLeave = {
  opacity: bounce(0),
}

const atActive = {
  opacity: bounce(1),
}

const FadeInOutSwitch = ({ children, ...props }) => (
  <AnimatedSwitch
    {...props}
    atEnter={atEnter}
    atLeave={atLeave}
    atActive={atActive}
    mapStyles={mapStyles}
    className={styles()}
  >
    {children}
  </AnimatedSwitch>
)

export default FadeInOutSwitch
