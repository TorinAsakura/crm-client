import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    backgroundImage: 'url(./bloom.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    height: '100%',
    width: '100%',
  },
})

const Bloom = () => (
  <div className={styles()} />
)

export default Bloom
