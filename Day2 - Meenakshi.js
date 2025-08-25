function findHighestMarks(marks) {
  if (marks.length === 0) {
    return "The array is empty.";
  }

  let highestMark = marks[0];

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highestMark) {
      highestMark = marks[i];
    }
  }

  return highestMark;
}

const studentMarks = [85, 92, 78, 95, 88];
const highestScore = findHighestMarks(studentMarks);

console.log("The highest mark is:", highestScore);
