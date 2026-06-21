export const countWords = (text) => {
  if (typeof text !== 'string') {
    return 0;
  }

  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const getLongestWord = (text) => {
  if (typeof text !== 'string' || text.trim() === '') {
    return '';
  }

  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.reduce((longest, word) => (
    word.length > longest.length ? word : longest
  ), '');
};

export const reverseWords = (text) => {
  if (typeof text !== 'string' || text.trim() === '') {
    return '';
  }

  return text.trim().split(/\s+/).filter(Boolean).reverse().join(' ');
};
