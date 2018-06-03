const Condition = ({ children, match }) => {
  if (match) {
    return children
  }

  return null
}

export default Condition
