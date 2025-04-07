function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let str = numbers;

  if (str.startsWith('//')) {
    const newlineIndex = str.indexOf('\n');
    const customDelimiter = str.substring(2, newlineIndex);
    const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiter = new RegExp(escapedDelimiter);
    str = str.substring(newlineIndex + 1);
  }

  const numList = str.split(delimiter).map(n => parseInt(n, 10));
  const negatives = numList.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numList.reduce((sum, n) => sum + (isNaN(n) ? 0 : n), 0);
}


module.exports = add;
