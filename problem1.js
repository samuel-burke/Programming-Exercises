function multiplesOf3and5(number) {
    let total = 0;
    var i;
    for (i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        total += i;
      }
    }
    
    console.log(total);
    return total;
  }
  
  multiplesOf3and5(1000);
  