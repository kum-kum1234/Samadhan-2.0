function calculateStudentResult(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    return "Please provide an array of marks.";
  }
  for (let m of marks) {
    if (typeof m !== "number" || m < 0) {
      return "Invalid mark detected.";
    }
  }
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const maxTotal = marks.length * 100; 
  const percentage = (total / maxTotal) * 100;

  let grade = "";
  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }
  const status = percentage >= 40 ? "Pass" : "Fail";

  return {
    total,
    percentage: percentage.toFixed(2),
    grade,
    status
  };
}

const marks = [78, 82, 69, 90];
console.log(calculateStudentResult(marks));
