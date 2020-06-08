function largestPalindromeProduct(n) {
    let a = 10 ** n;
    let b = 10 ** n;
    var lpp = 1;
    for (a = 10 ** (n) - 1; a > 0; a--) {
      for (b = 10 ** (n) - 1; b >= a; b--) {
        let number = a * b;
        if (number.toString() === number.toString().split("").reverse().join("")) {
          if (number > lpp) {
            lpp = number;
          }
        }
      }
    }
    return lpp;
  }
  
  largestPalindromeProduct(3)
  