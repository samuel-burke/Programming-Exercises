function largestPrimeFactor(number) {
    let i;
    let largestPrime = 1;
    for (i = 2; i <= number; i++) {
      while (number % i == 0) {
        number /= i;
        largestPrime = i;
      }
    }
    return largestPrime;
  }
  
  largestPrimeFactor(13195);
  