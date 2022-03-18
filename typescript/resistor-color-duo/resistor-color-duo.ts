interface ColorsMap { [key: string]: string }
const colorValues: ColorsMap = {
  'black': '0',
  'brown': '1',
  'red': '2',
  'orange': '3',
  'yellow': '4',
  'green': '5',
  'blue': '6',
  'violet': '7',
  'grey': '8',
  'white': '9'
};

export function decodedValue(colors: string[]): number {
  const validColors = colors.slice(0, 2);
  return Number(validColors.reduce((acc, color: string) => acc + colorValues[color], ''));
}
