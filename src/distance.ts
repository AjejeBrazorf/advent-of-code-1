export function calculateDistance(list1: number[], list2: number[]): number {
  console.log(list1, list2);

  const sortedList1 = list1.sort((a, b) => a - b);
  const sortedList2 = list2.sort((a, b) => a - b);

  return sortedList1.reduce((previousValue, currentValue, currentIndex) => {
    const prevValue = currentIndex === 1 ? Math.abs(previousValue - sortedList2[0]) : previousValue
    console.log(`${prevValue} + ${Math.abs(currentValue - sortedList2[currentIndex])}`);
    return previousValue + Math.abs(currentValue - sortedList2[currentIndex],)
  }, 0);
}
