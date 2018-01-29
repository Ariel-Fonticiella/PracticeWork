// This file will hold the program to read and print out the student data.

var message = " ";
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// This is a function that we pass the student object to. This will return a string and we will print this return string to the page.
function getStudentReport( student ){
  var report = '<h2> Student: ' + student.name + '</h2>';
  report += '<p> Track: ' + student.track + '</p>';
  report += '<p> Points: ' + student.points + '</p>';
  report += '<p> Achievements: ' + student.achievements + '</p>';
  return report;
}


while (true) {
  search = prompt("Search student records: type a name (or type 'quit' to end)");
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    //            |
    // students (with a 's') is the array. We're using array notation to access one item in that array and then i'm storing that into the var student. Now we can use dot syntax to access the name property of that object.

    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
    }
  }
}
