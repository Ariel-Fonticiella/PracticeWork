// This file will hold the program to read and print out the student data.

var message = " ";
var student;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  //            |
  // students (with a 's') is the array. We're using array notation to access one item in that array and then i'm storing that into the var student. Now we can use dot syntax to access the name property of that object.
  message += '<h2> Student: ' + student.name + '</h2>';
  message += '<p> Track: ' + student.track + '</p>';
  message += '<p> Points: ' + student.points + '</p>';
  message += '<p> Achievements: ' + student.achievements + '</p>';
}

print(message);
