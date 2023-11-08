const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');
    let studentCount = 0;
    const fields = {};
    
    for (const line of lines) {
      const student = line.split(',');
      if (student.length === 4 && student[0] !== '' && student[0] !== 'firstname' && student[3] !== 'CS' && student[3] !== 'SWE') {
        studentCount++;
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }

    console.log(`Number of students: ${studentCount}`);

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
