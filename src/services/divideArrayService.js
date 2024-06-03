export function divideArray(array) {
  const firstArrayLength =
    array.length % 2 === 0 ? array.length / 2 : Math.ceil(array.length / 2);

  let firstArray = [];
  let secondArray = [];

  for (let i = 0; i < firstArrayLength - 0; i++) {
    firstArray.push(array[i]);
  }
  for (let i = firstArrayLength; i < array.length - 0; i++) {
    secondArray.push(array[i]);
  }

  return [firstArray, secondArray];
}
