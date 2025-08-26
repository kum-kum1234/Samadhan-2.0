const students = [
    { name: "Aarav", marks: { math: 85, science: 78, english: 90 } },
    { name: "Priya", marks: { math: 92, science: 88, english: 95 } },
    { name: "Rohan", marks: { math: 65, science: 70, english: 60 } }
];

students.forEach(student => {
    let total = student.marks.math + student.marks.science + student.marks.english;
    console.log(`${student.name} - Total Marks: ${total}`);
});
