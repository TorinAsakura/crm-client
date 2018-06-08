import React from 'react'
import Icon from './Icon'

const PlusMinusIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      strokeWidth='0.2'
      transform='translate(5 3)'
      d='M13 8C13.5523 8 14 7.55231 14 7C14 6.44769 13.5523 6 13 6H8V1C8 0.447693 7.55229 0 7 0C6.44771 0 6 0.447693
        6 1V6H1C0.447708 6 0 6.44769 0 7C0 7.55231 0.447708 8 1 8H6V13C6 13.5523 6.44771 14 7 14C7.55229 14 8 13.5523
        8 13V8H13ZM13 18C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H1C0.447708 16 0 16.4477 0 17C0 17.5523
        0.447708 18 1 18H13Z'
    />
  </Icon>
)

export default PlusMinusIcon
