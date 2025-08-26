function findHighestMarks(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }
    return highest;
}
let studentMarks = [78, 85, 92, 67, 88, 95, 89];
console.log("Highest Marks:", findHighestMarks(studentMarks)); 
