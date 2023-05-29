export const truncateText = (text, characterCount) => {
  let truncatedText = text;
  if (text.length > characterCount) {
    const lastSpaceIndex = text.lastIndexOf(' ', characterCount);
    truncatedText = `${text.slice(0, lastSpaceIndex)}...`;
  }
  return truncatedText;
}