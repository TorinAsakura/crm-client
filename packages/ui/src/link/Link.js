import { createElement } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.6,
    },
  },
  plain: {
    '&:hover': {
      opacity: 1,
    },
  },
})

const Link = ({
  children, to, plain, ...props
}) =>
  createElement(
    to ? RouteLink : 'a',
    {
      ...props,
      className: styles({ plain }),
      to,
    },
    children,
  )

export default Link
