// "by value" (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a); // output: 2
console.log(b); // output: 3

//============================================================================

// "by reference" (ALL OBJECTS (including functions))
var c = { greeting: 'hi'};
var d;

d = c; // when you set values = to each other when it comes to Objects, you're simply pointing the two variable names to the SAME location in memory.

c.greeting = 'hello'; // mutate

console.log(c); // output: Object { greeting: "hello" }
console.log(d); // output: Object { greeting: "hello" }

// Here, because they're both set = to eachother "by reference", once you change one, you change the other.

//============================================================================

// "by reference" (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // output: Object { greeting: "Hola" }
console.log(d); // output: Object { greeting: "Hola" }

//============================================================================

// = operator sets up new memory space (new address)
c = { greeting: 'howdy'};
console.log(c); // output: Object { greeting: "howdy" }
console.log(d); // output: Object { greeting: "Hola" }

// "by reference" doesn't really apply here b/c the = operator saw that this wasn't a preexisting location in memory. This is a brand new object being created on the fly. So, since it saw that its second parameter wasn't an object that already existed in memory, it had to set up a spot in memory for this to live. So (c) is now pointing at a different spot in memory than (d).
