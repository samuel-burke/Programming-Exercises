function fiboEvenSum(n) {
    if (n < 2) {
      return 0;
    }
    if (n == 2) {
      return 2;
    }
    let sum = 0;
    let a = 1;
    let b = 2;
  
    while (n >= b) {
      if (b % 2 == 0) {
        sum += b;
      }
      let temp = b;
      b = a + b;
      a = temp;
    }
    console.log(sum);
    return sum;
  }
  
  fiboEvenSum(10);
  