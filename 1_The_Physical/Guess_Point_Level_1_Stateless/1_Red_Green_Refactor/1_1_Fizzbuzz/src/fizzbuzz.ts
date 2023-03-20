const fizzbuzz = (numbers: number[]) => {
  return numbers.reduce((acc, num) => {
    if (num % 3 === 0) return acc + 'fizz';
    return acc;
  }, '');
}

export {
  fizzbuzz,
}

