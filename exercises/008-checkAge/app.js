function checkAge(name, age) {
  // your code here
  return age < 21 ? "Go home, " + name + "!": "Welcome, " + name + "!"
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'