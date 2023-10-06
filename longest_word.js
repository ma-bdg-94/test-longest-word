function longestWord(sentence) {
  // if sentence is empty, return empty string
  if (sentence === '') {
    return ''
  }
  
  // Split the sentence into array of words and sort them by their length in descending order.
  const wordArray = sentence.split(" ").sort((a, b) => b.length - a.length);

  // If there are multiple wordArray of the same length, choose one that has the highest number of vowels.
  if (wordArray[0]?.length === wordArray[1]?.length) {
    return wordArray.reduce((longestWordWithMostVowels, currentWord) => {
      if (currentWord.split(/[aeiou]/gi).length - 1 > longestWordWithMostVowels.split(/[aeiou]/gi).length - 1) {
        return currentWord;
      }
      return longestWordWithMostVowels;
    }, "");
  }

  
  return wordArray[0];
}
