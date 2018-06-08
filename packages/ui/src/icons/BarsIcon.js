import React from 'react'
import Icon from './Icon'

const BarsIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      fill='black'
      stroke='black'
      strokeWidth='0.6'
      transform='translate(1 3.00061)'
      d='M7 3.49988V0.5C6.99889 0.241211 7.19545 0.024292 7.5 0H16C16.2761 0 16.5 0.223877 16.5 0.5V6.99976H21.5C21.7761
        6.99976 22 7.22363 22 7.49976V17.4995C22 17.7756 21.7761 17.9994 21.5 17.9994H0.5C0.223877 17.9994 3.05176e-05
        17.7756 0 17.4995V3.99988C-0.00111389 3.74109 0.19545 3.52417 0.5 3.49988H7ZM7 4.49988H1V16.9995H7V4.49988ZM16.5
        7.99976V16.9995H21V7.99976H16.5ZM15.5 1H8V16.9995H15.5V1Z'
    />
  </Icon>
)

export default BarsIcon
