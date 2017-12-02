//    ****************** GLOBAL "A" EXECUTION CONTEXT ******************

//              ******** "L" EXECUTION CONTEXT ********
  function l() {
    var myVar = "L";
    console.log(myVar);
}
//              ******** "L" EXECUTION CONTEXT END ********

//              ******** "E" EXECUTION CONTEXT ********
  function e() {
    var myVar = "E";
    console.log(myVar);
    l();
}
//              ******** "E" EXECUTION CONTEXT END ********

//              ******** "I" EXECUTION CONTEXT ********
  function i() {
    var myVar = "I";
    console.log(myVar);
    e();
}
//              ******** "I"EXECUTION CONTEXT END ********

//              ******** "R" EXECUTION CONTEXT ********
  function r() {
    var myVar = "R";
    console.log(myVar);
    i();
}
//              ******** "R" EXECUTION CONTEXT END ********

var myVar = "A";
console.log(myVar);
r();


//    ****************** GLOBAL "A" EXECUTION CONTEXT END ******************
