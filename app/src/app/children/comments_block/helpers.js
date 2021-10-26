export function getCaptionFromEdges (data) {
  const newData = []
  for (const item of data) {
    if (item) {
      newData.push(item)
    }
  }
  return newData
}
