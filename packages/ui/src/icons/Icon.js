import React from 'react'

const getSize = (width, height, ratio) => {
  if (!width && !height) return { width: 13, height: 13 }
  if (width && height) return { width, height }

  return {
    ...width && { width, height: (width / ratio) },
    ...height && { width: (height * ratio), height },
  }
}

const getViewBox = (viewBox, originalWidth, originalHeight) =>
  viewBox || `0 0 ${originalWidth} ${originalHeight}`

const Icon = ({
  originalWidth, originalHeight, width, height, fill = '#000000', stroke, children, viewBox, ...props
}) => (
  <svg
    {...props}
    fill={fill}
    stroke={stroke}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize(width, height, originalWidth / originalHeight)}
  >
    {children}
  </svg>
)

export default Icon
