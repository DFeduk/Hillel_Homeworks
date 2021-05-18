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

const getAverageGroupMark = () => {
  let arrayOfMarks = [];
  for (let i = 0; i < students.length; i++) {
    let groupMarks = students[i].marks;
    arrayOfMarks = arrayOfMarks.concat(groupMarks);
  }
  let sum = arrayOfMarks.reduce((a, b) => a + b);
  let average = sum / arrayOfMarks.length;
  return average;
};

const getAverageStudentMark = (id) => {
  let studentMarks = id.marks;
  let sum = studentMarks.reduce((a, b) => a + b);
  let average = sum / studentMarks.length;
  return average;
};
const avarageGroupMark = getAverageGroupMark();
const averageStudentMark = getAverageStudentMark(students[1]);
