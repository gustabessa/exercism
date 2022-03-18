/* eslint-disable no-useless-escape */
const bracketsMap: Record<string, string> = {
  ']': '[',
  ')': '(',
  '}': '{',
}

export function isPaired(input: string): boolean {
  const anythingButBrackets = /[^\[({})\]]/g
  const bracketsString = input.replace(anythingButBrackets, '');
  const bracketsStack: string[] = [];
  for (const bracket of bracketsString.split('')) {
    const closingBracketCouterpart = bracketsMap[bracket];
    const isClosingBracket = closingBracketCouterpart !== undefined;
    if (!isClosingBracket) bracketsStack.push(bracket);
    else if (closingBracketCouterpart !== bracketsStack.pop()) return false;
  }
  return bracketsStack.length === 0;
}
