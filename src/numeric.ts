export function swapMinMax(min: number, max: number): [number, number] {
  return min > max ? [max, min] : [min, max];
}

export function inRange(num: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return num > min && num < max;
}

export function inRangeLeft(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return value === min || inRange(value, min, max);
}

export function inRangeRight(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return value === max || inRange(value, min, max);
}

export function inRangeInclusive(value: number, min: number, max: number) {
  return [min, max].includes(value) || inRange(value, min, max);
}

export function hexadecimal2decimal(hd: string | number) {
  return hd
    .toString()
    .split("")
    .reverse()
    .map((char, index) => {
      const value = char.match(/^\d$/) ? +char : (char.toUpperCase().charCodeAt(0) - 55);
      return value * Math.pow(16, index);
    })
    .reduce((acc, value) => acc + value, 0);
}
