function smallestMult(n) {
    var number = 1;
    var isGood = true;
    while(true) {
      var i;
      for (i = 1; i <= n; i++) {
        if (number % i != 0) {
          isGood = false;
          break;
        }
      }
      if (isGood) {
        return number;
      }
      isGood = true;
      number++;
    }
  }
  
  
  smallestMult(20);
  