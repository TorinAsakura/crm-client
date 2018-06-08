import React from 'react'
import Icon from './Icon'
import { rotate } from './utils'

const ArrowIcon = ({ top, down, left, ...props }) => (
  <Icon originalWidth={8} originalHeight={12} {...props}>
    <g transform={rotate({ top, down, left }, 8, 12)}>
      <path
        transform='translate(7.70508 12) rotate(-180)'
        d='M6.70615 2.11538C7.095 1.72569 7.09466 1.09466 6.70538 0.705384C6.31581 0.315811 5.68419 0.315811
          5.29462 0.705385L0 6L5.29462 11.2946C5.68419 11.6842 6.31581 11.6842 6.70538 11.2946C7.09466 10.9053
          7.095 10.2743 6.70615 9.88462L2.83 6L6.70615 2.11538Z'
      />
    </g>
  </Icon>
)

export default ArrowIcon
