const directions = {
  right: 0,
  down: 90,
  left: 180,
  top: -90,
}

export const rotate = (values, width, height) => {
  const target = Object.keys(values).filter(key => values[key]).shift()

  if (target) {
    return `rotate(${directions[target]} ${width / 2} ${height / 2})`
  }

  return null
}
