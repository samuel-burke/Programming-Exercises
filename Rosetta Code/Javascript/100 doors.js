function getFinalOpenedDoors(numDoors) {
    let doors = [];
    var i;
    for (i = 1; i <= numDoors; i++) {
      var j;
      for (j = i; j <= numDoors; j+=i) {
        if (doors.includes(j)) {
          doors.splice(doors.indexOf(j), 1 );
        }
        else {
          doors.push(j);
        }
      }
    }
    return doors;
  }
  getFinalOpenedDoors(100);