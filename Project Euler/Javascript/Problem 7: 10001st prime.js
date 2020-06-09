function nthPrime(n) {
    var number = 2;
    var primes = [2];
    while (primes.length < n) {
      let isPrime = true;
      number++;
      var idx;
      for (idx = 0; idx < primes.length; idx++) {
        if (number % primes[idx] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(number);
      }
    }
    return primes[n-1];
  }
  
  nthPrime(10001);
  