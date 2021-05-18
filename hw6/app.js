const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

let getAverageGroupMark = (students) => {
  let arrayOfMarks = [];
  for (let i = 0; i < students.length; i++) {
    let groupMarks = students[i].marks;
    arrayOfMarks = arrayOfMarks.concat(groupMarks);
  }
  let average = calculation(arrayOfMarks);
  console.log(average);
  return average;
};

let getAverageStudentMark = (students) => {
  let studentMarks = students.marks;
  let average = calculation(studentMarks);
  console.log(average);
  return average;
};

function calculation(array) {
  let sum = array.reduce((a, b) => a + b);
  let average = sum / array.length;
  return average;
}

let avarageGroupMark = getAverageGroupMark(students);
let averageStudentMark = getAverageStudentMark(students[2]);
