export function isInputStrong(wordToDescribe: string, hasASpecialCharacter: boolean): boolean {
    if (wordToDescribe.length < 6) {
      return false
    }
    if (wordToDescribe === wordToDescribe.toLowerCase()) {
      return false
    }
    if (wordToDescribe === wordToDescribe.toUpperCase()){
      return false
    }
    if (!hasASpecialCharacter) {
      return false
    }
    return true
  }
