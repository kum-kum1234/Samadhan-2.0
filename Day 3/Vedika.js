// studentMarksCalculator.js
const students = [
  { name: "Vedika", marks: 91 },
  { name: "Siddhi", marks: 90 },
  { name: "Kumkum", marks: 89 },
  { name: "Meenakshi", marks: 88 }
];

function calculateAverage(students) {
  const total = students.reduce((sum, student) => sum + student.marks, 0);
  return total / students.length;
}

console.log("Average Marks:", calculateAverage(students));
