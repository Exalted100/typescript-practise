console.log("Hello world")

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
  
greet("Brendan", new Date()); 

function printName(obj: { first: string; last?: string }) {
    console.log(`first name is ${obj.first}${obj.last ? `last name is ${obj.last}` : ""}`)
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

//UNION TYPE
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }

//TYPE ALIAS
type Point = {
    x: number;
    y: number;
  };
  
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

//LITERAL TYPES
function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");