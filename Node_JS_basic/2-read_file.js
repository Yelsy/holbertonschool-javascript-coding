const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = {};

    for (const line of lines) {
      const fields = line.split(',');
      const firstName = fields[0];
      const field = fields[1];

      if (firstName && field) {
        if (students[field]) {
          students[field].push(firstName);
        } else {
          students[field] = [firstName];
        }
      }
    }

    const totalStudents = Object.keys(students).reduce((total, field) => total + students[field].length, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
