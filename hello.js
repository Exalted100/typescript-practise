console.log("Hello world");
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Brendan", new Date());
function printName(obj) {
    console.log("first name is " + obj.first + (obj.last ? "last name is " + obj.last : ""));
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
//UNION TYPE
function printId(id) {
    console.log("Your ID is: " + id);
}
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
//LITERAL TYPES
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
