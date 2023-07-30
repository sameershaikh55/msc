export const wordArray = (word: string) => {
  const characters = word.split(""); // Split the string into individual characters
  const upperCaseCharacters = characters.map((char) => char.toUpperCase());

  return upperCaseCharacters;
};
