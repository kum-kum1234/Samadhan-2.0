function findHighest(arr) {
  let highest = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
}

let marks = [85, 92, 78, 96, 88];
console.log("Highest Marks: " + findHighest(marks));
