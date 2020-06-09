function sumSquareDifference(n) {
    return squareOfSums(n) - sumOfSquares(n);
  }

function sumOfSquares(n) {
    let total = 0;
    var i;
    for (i = 1; i <= n; i++) {
        total += i ** 2;
    }
    return total;
}

function squareOfSums(n) {
    let total = 0;
    var i;
    for (i = 1; i <= n; i++) {
        total += i;
    }
    return total ** 2;
}
  
sumSquareDifference(100);
  