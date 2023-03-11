function getFirstTwoChars(str: string): string {
  let words = str.split(' ')
  let result = ''
  for (let i = 0; i < Math.min(2, words.length); i++) {
    result += words[i].charAt(0)
  }
  return result
}

export {
  getFirstTwoChars,
}