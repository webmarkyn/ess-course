const fizzbuzz = (numbers: number[]) => {
  return numbers.reduce((acc, num) => {
    let result = ''
    if (num % 3 === 0) result += 'fizz';
    if (num % 5 === 0) result += 'buzz';
    return acc + result;
  }, '');
}

export {
  fizzbuzz,
}

