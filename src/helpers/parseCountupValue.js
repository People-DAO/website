const parseCountupValue = ({value, decimals = 0, reverse = false}) => {
  const end = Number(value.toFixed(decimals), 10)
  const direction = reverse ? -1 : 1
  const start = Math.max(0, end - (direction * 45 / Math.pow(-10, decimals)))

  return {start, end, decimals}
}

export default parseCountupValue