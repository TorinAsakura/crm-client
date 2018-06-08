import React from 'react'
import Icon from './Icon'

const CircleIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <path
      fill='none'
      fillRule='evenodd'
      clipRule='evenodd'
      stroke='black'
      strokeWidth='1.7'
      transform='translate(1 1)'
      d='M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487
        0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z'
    />
  </Icon>
)

export default CircleIcon
