interface ColorsMap { [key: string]: number }
const colorValues: ColorsMap = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
};

export function decodedResistorValue(colors: string[]) {
  const [firstColor, secondColor, thirdColor] = colors;
  const firstColorValue = colorValues[firstColor];
  const secondColorValue = colorValues[secondColor];
  const leadingZerosValue = colorValues[thirdColor];
  const resistorNumberValue = `${firstColorValue}${secondColorValue}${String.prototype.padStart(leadingZerosValue, '0')}`;
  const hasThreeZeros = resistorNumberValue.includes('000');
  const suffix = hasThreeZeros ? 'kiloohms' : 'ohms';
  return `${resistorNumberValue.replace('000', '')} ${suffix}`;
}
