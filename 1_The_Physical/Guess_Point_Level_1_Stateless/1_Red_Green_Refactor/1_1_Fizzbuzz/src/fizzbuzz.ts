const fizzbuzz = (numbers: number[]) => {
  return numbers.reduce((acc, num) => {
    if (num % 3 === 0) return acc + 'fizz';
    if (num % 5 === 0) return acc + 'buzz';
    return acc;
  }, '');
}

export {
  fizzbuzz,
}

