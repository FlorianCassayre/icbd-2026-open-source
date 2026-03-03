export const range = (n: number): number[] => {
  const array = new Array<number>(n);
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array;
};
