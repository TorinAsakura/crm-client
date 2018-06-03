export function getSize(height, ratio) {
  return {
    height,
    width: height * ratio,
  }
}
