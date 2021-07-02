import { hasAVowel } from "../utils/hasAVowel"
import { isInputStrong } from "../utils/isInputStrong"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const hasASpecialCharacter = wordToDescribe.includes("?") || wordToDescribe.includes("!") || wordToDescribe.includes("£");

  

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasASpecialCharacter && <li>Contains a special character</li>}
      {isInputStrong(wordToDescribe, hasASpecialCharacter) && <li>Impressively strong input!</li>}
    </ul>
  )
}

export default WordDescription