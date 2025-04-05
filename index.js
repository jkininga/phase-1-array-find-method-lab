// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


console.log(record.find(superbowlWin))


function superbowlWin(element) {
  if (element.result === 'W') {
      return element.year; // Return only the year of the win
  }
  else{
    return undefined
  }
}
  
 function superbowlWin(record) {
  const win = record.find(element => element.result === 'W');
  return win ? win.year : undefined; // Return the year if found, otherwise undefined
}

console.log(superbowlWin(record));