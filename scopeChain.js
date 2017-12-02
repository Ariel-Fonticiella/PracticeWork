// ====================== GLOBAL EXECUTION CONTEXT ======================

 //==== function e() ====
  function e() {

//      ===== function x(); =====
              function x() {
              var myVar = "X";
              console.log(myVar);
              }
//      ===== function x(); =====

  var myVar = "E";
  console.log(myVar);
  x();
}//==== function e() ====

var myVar = "S";
console.log(myVar);
e();

//====================== GLOBAL EXECUTION CONTEXT END ======================
