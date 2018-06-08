import React from 'react'
import Icon from './Icon'

const RouteIcon = props => (
  <Icon originalWidth={24} originalHeight={24} fill='none' {...props}>
    <path
      fill='#ffffff'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0H24V24H0V0Z'
    />
    <path
      stroke='#000000'
      strokeWidth='1.6'
      transform='translate(2.5 1)'
      d='M9.76095 20.6992C9.66519 20.7842 9.57642 20.8631 9.49561 20.9348C9.40779 20.858 9.31059 20.773 9.20525
        20.6807C8.70234 20.2402 8.014 19.6348 7.27205 18.9752C5.7801 17.6488 4.09685 16.1256 3.25515 15.2746C1.73322
        13.7359 0.8 11.6412 0.8 9.33333C0.8 4.63379 4.68171 0.8 9.5 0.8C14.3183 0.8 18.2 4.63379 18.2 9.33333C18.2
        11.734 17.1902 13.9044 15.5581 15.4578C14.7137 16.2615 13.0709 17.7437 11.6302 19.0328C10.9117 19.6756 10.2465
        20.2677 9.76095 20.6992Z'
    />
    <path
      fill='#ffffff'
      stroke='#000000'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeWidth='1.6'
      transform='translate(9.20589 7.60001)'
      d='M2.79412 5.5C4.33727 5.5 5.58824 4.26878 5.58824 2.75C5.58824 1.23122 4.33727 0 2.79412 0C1.25097 0 0 1.23122
        0 2.75C0 4.26878 1.25097 5.5 2.79412 5.5Z'
    />
  </Icon>
)

export default RouteIcon
