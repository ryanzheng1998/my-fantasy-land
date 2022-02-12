export const median = (list: number[]) => {
  const sortedList = list.slice().sort()
  if (list.length % 2 === 1) {
    const middleIndex = list.length - 1 / 2
    return sortedList[middleIndex]
  }

  const rightMiddleIndex = list.length / 2
  const leftMiddleIndex = rightMiddleIndex - 1

  return (sortedList[rightMiddleIndex] + sortedList[leftMiddleIndex]) / 2
}
